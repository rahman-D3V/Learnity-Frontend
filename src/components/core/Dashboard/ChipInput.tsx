import { useState } from "react";
import { useCourseStore } from "../../../store/useCourseStore";

const ChipInput = () => {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const setCourseTag = useCourseStore((s) => s.setCourseTag);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();

      const value = input.trim();
      if (!value) return;

      setTags((prev) => {
        const updated = [...prev, input];
        setCourseTag(updated);
        return updated;
      });

      setInput("");
    }
  };

  const removeTag = (index: number) => {
    const updatedTags = tags.filter((_, i) => i !== index);

    setCourseTag(updatedTags);
    setTags(updatedTags);
  };
  return (
    <div className="space-y-[6px]">
      <p>Tags</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type and press comma..."
        className="w-full rounded-lg p-3 bg-richblack-700"
      />
      <div className="flex gap-2 mt-2 flex-wrap">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center gap-1 bg-yellow-200 px-3 py-1 rounded-full"
          >
            <span>{tag}</span>
            <button type="button" onClick={() => removeTag(index)}>
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* String output */}
    </div>
  );
};

export default ChipInput;
