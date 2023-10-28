"use client"
import EmojiPicker, {
    EmojiStyle,
    Emoji,
} from "emoji-picker-react";
import { useState } from "react";

export default function Emojis() {
    const [selectedEmoji, setSelectedEmoji] = useState("1f60a");
    const [inputValue, setInputValue] = useState("");

    function onClick(emojiData) {
        setInputValue((inputValue) =>
            inputValue + (emojiData.isCustom ? emojiData.unified : emojiData.emoji)
        );
        setSelectedEmoji(emojiData.unified);
    }

    return (
        <div >
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Select Emojis..."
                />
            </div>
            <EmojiPicker
                onEmojiClick={onClick}
                autoFocusSearch={false}
                emojiStyle={EmojiStyle.NATIVE}
            />
        </div>
    );
}
