import { FeedbackType, feedbackTypes } from "..";
interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
    return (
        <div className="flex py-8 gap-2 w-full">
            {Object.entries(feedbackTypes).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        className="bg-zinc-800 py-5 w-24 items-center rounded-lg flex-1 flex flex-col gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                        type="button"
                        onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                    >
                        <img src={value.image.src} alt={value.image.alt}></img>
                        <span>{value.title}</span>
                    </button>
                );
            })}
        </div>
    );
}