import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PageContainer from "../PageContainer";
import axios from "axios";

const ContactContainer = styled.div`
  ${tw`
  w-full
  h-auto
  px-1
  overflow-hidden
  pb-40
    `};
`;

const FormContainer = styled.div`
  ${tw`
  m-auto
  w-full
  md:w-3/4
  lg:w-1/2
  h-auto
    `};
`;

const ContactInput = styled.input`
  ${tw`
  shadow 
  flex
  appearance-none 
  border 
  border-gray-300 
  rounded 
  w-full 
  px-3 
  py-2
  text-gray-700 
  mb-3 
  leading-tight 
  focus:outline-none 
  focus:shadow-sm
    `};
`;

const ContactMessage = styled.textarea`
  ${tw`
  shadow 
  flex
  appearance-none 
  border 
  border-gray-300 
  rounded 
  w-full 
  px-3 
  py-2
  text-gray-700 
  mb-3 
  leading-tight 
  focus:outline-none 
  focus:shadow-sm
  min-h-[100px]
  max-h-[400px]
    `};
`;

const Button = styled.button`
  ${tw`
    py-2
    px-[10%]
    border-theme-blue
    drop-shadow-lg
    font-medium 
    text-[10px]
    text-theme-blue
    bg-transparent 
    rounded-lg
    border 
    hover:text-theme-blue
    hover:scale-105
    transform-gpu
    transition-all
    left-[50%]
    absolute
    translate-x-[-50%]
    my-2
    `};
`;

const Form = styled.form`
  ${tw`
  bg-transparent 
  rounded 
  px-8 
  pt-6 
  pb-8 
  mb-4
    `};
`;

const ContactTitle = styled.h1`
  ${tw`
      font-bold
      text-2xl 
      text-center
      xl:text-5xl 
      sm:text-2xl 
      md:text-4xl 
      text-theme-darkblue
      mb-16
      leading-none
      mt-32
    `};
`;

export function ContactSection() {
  const getFormInfo = (form: FormData, info: string) => {
    return form.get(info);
  };

  const addFormToMongoDB = (form : FormData) => {
    const name = getFormInfo(form, "name")
    const email = getFormInfo(form, "email")
    const message = getFormInfo(form, "message");
    axios
      .post("contact", {
        email: email,
        name: name,
        message: message,
      })
      .then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addFormToMongoDB(new FormData(event.currentTarget));
  };

  return (
    <PageContainer className=" rounded-tl-[20%] bg-white">
      <ContactContainer>
        <ContactTitle>CONTACT</ContactTitle>
        <FormContainer>
          <Form id="contactForm" onSubmit={handleFormSubmit}>
            <ContactInput
              name="name"
              type="text"
              placeholder="Name"
            ></ContactInput>
            <ContactInput
              name="email"
              type="text"
              placeholder="Contact Email"
            ></ContactInput>
            <ContactMessage
              name="message"
              cols={40}
              rows={4}
              placeholder="Message"
            />
            <Button type="submit">Send</Button>
          </Form>
        </FormContainer>
      </ContactContainer>
    </PageContainer>
  );
}
