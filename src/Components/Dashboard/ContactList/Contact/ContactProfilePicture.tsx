import React, { useRef } from "react"
import { contactI } from "Redux/Slices/Contact.Slice"
import styled from "@emotion/styled"

const ContactProfilePicture: React.FC<{
  contact: contactI
  setContactPageVis: React.Dispatch<
    React.SetStateAction<{
      visible: boolean
      contact: contactI | null
    }>
  >
}> = ({ contact, setContactPageVis }) => {
  const imageRef = useRef<HTMLImageElement>(null)

  const loadImage = () =>
    imageRef.current ? imageRef.current.classList.add("visible") : ""

  const clickHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
    setContactPageVis(state => ({
      ...state,
      visible: true,
      contact,
    }))
  }

  return (
    <StyleProfilePicture onClick={clickHandler}>
      <img
        ref={imageRef}
        loading="lazy"
        decoding="async"
        onLoad={loadImage}
        src={contact.profilePicture.thumbnail}
        alt="contact profile"
      />
    </StyleProfilePicture>
  )
}

const StyleProfilePicture = styled.div`
  width: clamp(2.5em, 4vw, 3em);
  height: clamp(2.5em, 4vw, 3em);
  border-radius: 50%;

  align-self: center;
  background: rgb(44, 44, 44);
  overflow: hidden;

  .visible {
    opacity: 1;
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    opacity: 0;
    transition: all ease 0.2s;
  }
`

export default ContactProfilePicture
