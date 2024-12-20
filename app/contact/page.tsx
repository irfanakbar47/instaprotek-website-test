'use client'

import { useState } from 'react';
import { InputField } from "@/components";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BiBuildings } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from '@/components';

export default function Contact() {
	const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
    };
  };

  return (
    <main className="maxResources flex flex-col my-[10em] gap-y-10 px-3 md:px-5">
      <h1 className="text-3.7xl text-blue-primary1 font-bold px-3 lg:px-0">Partner With Us</h1>
      <div className="flex flex-col maxForm gap-y-16">
        <p>Please fill out this form and we&apos;ll get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit} className="flex flex-col pr-3 sm:pr-0 md:pr-5 lg:pr-0">
          <div className="flex gap-x-5 flex-wrap gap-y-3 mb-3 sm:mb-10 sm:flex-nowrap">
            <InputField id="first_name" label="First Name" type="text" icon={<FaUser />} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <InputField id="last_name" label="Last Name" type="text" icon={<FaUser />} value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="flex gap-x-5 flex-wrap gap-y-3 mb-3 sm:mb-10 sm:flex-nowrap">
            <InputField id="email" label="Email Address" type="email" icon={<IoMdMail size={25} />} value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField id="phone" label="Phone Number" type="text" icon={<FaPhoneAlt />} isPhone value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="flex gap-x-5 mb-3 sm:mb-10">
            <InputField id="company" label="Company" type="text" icon={<BiBuildings size={25} />} value={company} onChange={(e) => setCompany(e.target.value)} />
          </div>
          <div className="flex gap-x-5 mb-16">
            <InputField id="message" label="Message" type="textarea" icon={<MdMessage size={25} />} value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <div className="flex justify-end gap-x-5">
            <Button type="submit" label="Submit" customStyle="!px-10" />
          </div>
        </form>
      </div>
    </main>
  );
}
