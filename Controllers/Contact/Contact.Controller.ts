/* eslint-disable @typescript-eslint/no-extra-semi */
import { nanoid } from "nanoid"

import User, { contactI } from "../../Models/user.model"

import { controller } from "../controller"

export const addContact: controller = async (req, res) => {
  const id = req.user.id
  let roomId = nanoid()
  const contactName = req.body.name
  const contactUsername = req.body.username

  if (contactUsername === req.user.username) {
    return res.status(400).send({
      message: "You can't add yourself as a contact",
    })
  }

  try {
    const contact = await User.findOne(
      { username: contactUsername },
      { password: 0, email: 0, phone: 0 }
    ).lean()

    if (contact) {
      const mutualContact = contact.contacts
        ? contact.contacts.filter(c => c.contactId === id)
        : null

      if (mutualContact && mutualContact[0]) {
        roomId = mutualContact[0].roomId
      }

      const user = await User.findById(id, {
        password: 0,
        email: 0,
        phone: 0,
        profilePicture: 0,
      }).lean()

      const contactExists =
        (user.contacts &&
          user.contacts.filter(c => c.contactId === contact._id.toString())) ||
        null

      if (contactExists && contactExists[0]) {
        return res.status(409).send({ message: "Contact Already Exists" })
      }

      const newContact = {
        name: contactName,
        username: contactUsername,
        contactId: contact._id.toString(),
        profilePicture: contact.profilePicture,
        roomId,
        lastSeen: "",
        lastMessage: "",
      }

      await User.findByIdAndUpdate(id, {
        $push: {
          contacts: newContact,
        },
      })
        .deleteCacheById(id)
        .lean()

      return res.status(200).send({
        message: "Contact Added",
        contact: newContact,
      })
    } else return res.status(404).send({ message: "Incorrect Username" })
  } catch (err) {
    console.log({ addContact: err })
    return res.status(500).send(err)
  }
}

export const autoUpdateContact: controller = async (req, res) => {
  const existingContactInfo: contactI = req.body.contact

  const id = req.user.id
  try {
    const contact = await User.findById(existingContactInfo.contactId, {
      contacts: 0,
      password: 0,
    }).lean()

    if (
      contact.profilePicture.large ===
        existingContactInfo.profilePicture.large &&
      contact.profilePicture.thumbnail ===
        existingContactInfo.profilePicture.thumbnail
    ) {
      return res.status(200).send({ message: "Up to Date", payload: null })
    } else {
      await User.updateOne(
        { _id: id, "contacts.contactId": existingContactInfo.contactId },
        {
          $set: {
            "contacts.$.profilePicture": contact.profilePicture,
          },
        }
      )
        .deleteCacheById(id)
        .lean()

      return res.status(200).send({
        message: "Updating Contact",
        payload: {
          profilePicture: contact.profilePicture,
        },
      })
    }
  } catch (err) {
    console.log({ updateContact: err })
    return res.status(500).send(err)
  }
}

export const updateContact: controller = async (req, res) => {
  const { id } = req.user
  const contactId = req.body.contactId
  const newName = req.body.newName

  try {
    await User.findOneAndUpdate(
      { _id: id, "contacts.contactId": contactId },
      {
        $set: {
          "contacts.$.name": newName,
        },
      }
    )
      .deleteCacheById(id)
      .lean()

    return res.status(200).send({ message: "Contact Modified" })
  } catch (err) {
    console.log({ updateContact: err })
    return res.status(500).send(err)
  }
}

export const deleteContact: controller = async (req, res) => {
  const { id } = req.user
  const contactId = req.body.contactId

  try {
    await User.findOneAndUpdate(
      { _id: id, "contacts.contactId": contactId },
      {
        $pull: {
          contacts: {
            contactId,
          },
        },
      }
    )
      .deleteCacheById(id)
      .lean()

    return res.sendStatus(204)
  } catch (err) {
    console.log({
      deleteContact: err,
    })

    return res.status(500).send(err)
  }
}