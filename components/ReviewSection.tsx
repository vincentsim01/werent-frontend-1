import ReviewCard from "./ReviewCard";
import ReviewSummary from "./ReviewSummary";

export default function ReviewSection() {
	return (
		<div>
			<div className="w-full outline-2 outline-b outline-gray-500 || p-2">
				This box is the review section (string to be deleted)
				<div className="flex flex-col gap-2">
					<ReviewSummary />
					{/* MAP ReviewCard */}
					<ReviewCard />
					<ReviewCard />
				</div>
			</div>
		</div>
	);
}
