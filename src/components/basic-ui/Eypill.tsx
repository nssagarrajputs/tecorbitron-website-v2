type Props = {
    text: string;
};

export default function Eypill({ text }: Props) {
    return (
        <div className="border-malachite-soft bg-malachite/10 flex-center gap-2 rounded-full border px-4 py-2 select-none">
            <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
            <span className="text-malachite-rich text-xmall font-bold tracking-wider uppercase">
                {text}
            </span>
        </div>
    );
}
