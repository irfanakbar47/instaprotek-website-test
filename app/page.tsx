import { Hero, SectionV3, SectionV4 } from "@/components";

export default function Home() {
	return (
		<main className="">
			<Hero
				subheading
				background="https://acdn.dnamicro.net/instaprotek/instaprotek-homepage-banner.mp4"
				heroTitle="Technology-Driven Warranty Solutions"
			/>
			<SectionV3
				id="blog"
				topTitle="Blog"
				title="Latest Insights & Updates"
				description="Stay Ahead with Our Latest Articles, News, and Announcements"
				descriptionStyle="w-11/12"
				btnLabel="See all news"
				containerStyle="!py-0"
			/>
			<SectionV4
				imgUrl="https://acdn.dnamicro.net/instaprotek/instaprotek-set-your-products-apart.jpg"
				imgAlt="Set Your Products Apart"
				customStyle="!mb-0"
			/>
		</main>
	);
}