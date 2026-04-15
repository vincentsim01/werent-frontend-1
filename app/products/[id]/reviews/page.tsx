import ReviewCard from "@/components/ReviewCard";
import ReviewSummary from "@/components/ReviewSummary";

export default function AllReviews() {
	return (
		<div>
			<div className="mx-auto w-full xl:w-[1280px] flex flex-col justify-center gap-2">
				This is the AllReviews Page (string to delete)
				<div className="flex flex-col gap-2">
					<div className="sticky top-14 z-999">
						{/* ^^^ top-12 must adjust with the height of the header */}
						<ReviewSummary />
					</div>
					<div className="flex flex-col gap-2">
						{/* MAP ReviewCard */}
						<ReviewCard />
						<ReviewCard />
						<ReviewCard />
						<ReviewCard />
						<ReviewCard />
						<ReviewCard />
						<ReviewCard />
						<ReviewCard />
						<ReviewCard />
						<ReviewCard />
					</div>
				</div>
			</div>
		</div>
	);
}
