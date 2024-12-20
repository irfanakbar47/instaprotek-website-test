import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise",
  description: "instaProtek has partnered with industry leaders to deliver the most robust, flexible, and comprehensive enterprise device fleet management program."
};

export default function EnterpriseLayout({
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