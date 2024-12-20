import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "To connect with us at instaProtek, please fill out this form and we'll get back to you as soon as possible."
};

export default function ContactLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="pb-[3em]">
      {children}
    </section>
  )
}