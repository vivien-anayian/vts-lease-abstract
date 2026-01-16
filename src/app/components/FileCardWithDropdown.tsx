import { useState, useRef, useEffect } from 'react';
import { X, FileText, ChevronDown, Check } from 'lucide-react';

interface FileCardWithDropdownProps {
  file: File;
  index: number;
  selectedType: string;
  documentTypes: string[];
  onTypeChange: (index: number, type: string) => void;
  onRemove: (index: number) => void;
}

export default function FileCardWithDropdown({
  file,
  index,
  selectedType,
  documentTypes,
  onTypeChange,
  onRemove,
}: FileCardWithDropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showDropdown]);

  return (
    <div className="flex items-start gap-[12px] p-[12px] bg-[#f9fafa] rounded-[8px] border border-[#e5e7eb]">
      {/* File Icon */}
      <div className="shrink-0 mt-[4px]">
        <FileText className="w-5 h-5 text-[#4837b9]" />
      </div>

      {/* File Info and Dropdown */}
      <div className="flex-1 min-w-0">
        {/* File Name */}
        <p className="text-[14px] font-medium font-['Inter:Medium',sans-serif] leading-[20px] text-[#1d1e20] truncate mb-[8px]">
          {file.name}
        </p>

        {/* Document Type Dropdown */}
        <div className="flex flex-col gap-[4px]">
          <label className="text-[10px] font-medium font-['Inter:Medium',sans-serif] leading-[14px] text-[#72777e] uppercase tracking-wider">
            Document Type
          </label>
          <div ref={dropdownRef} className="relative">
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full h-[32px] px-[10px] bg-white border border-[#d6d8db] rounded-[4px] flex items-center justify-between cursor-pointer hover:border-[#4837b9] transition-colors"
            >
              <span className="text-[13px] font-['Inter:Regular',sans-serif] leading-[18px] text-[#1d1e20] truncate">
                {selectedType}
              </span>
              <ChevronDown className="w-4 h-4 text-[#72777e] shrink-0" />
            </div>

            {showDropdown && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-[#d6d8db] rounded-[4px] shadow-lg max-h-[200px] overflow-y-auto">
                <div className="p-1">
                  {documentTypes.map((type) => (
                    <div
                      key={type}
                      onClick={() => {
                        onTypeChange(index, type);
                        setShowDropdown(false);
                      }}
                      className="px-3 py-2 hover:bg-[#f9fafa] cursor-pointer rounded-[4px] transition-colors flex items-center justify-between"
                    >
                      <p className="text-[13px] font-['Inter:Regular',sans-serif] leading-[18px] text-[#1d1e20]">
                        {type}
                      </p>
                      {selectedType === type && (
                        <Check className="w-4 h-4 text-[#4837b9]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Remove Button */}
      <button
        type="button"
        onClick={() => onRemove(index)}
        className="shrink-0 p-1 hover:bg-gray-200 rounded transition-colors mt-[4px]"
      >
        <X className="h-4 w-4 text-[#72777e]" />
      </button>
    </div>
  );
}
