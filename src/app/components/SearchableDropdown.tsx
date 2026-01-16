import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface SearchableDropdownProps {
  value: string;
  options: Array<{ id: string; name: string; }>;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  required?: boolean;
  compact?: boolean;
}

export default function SearchableDropdown({
  value,
  options,
  onChange,
  placeholder = 'Select...',
  className = '',
  label,
  required = false,
  compact = false,
}: SearchableDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOption = options.find(opt => opt.name === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : 0);
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredOptions[highlightedIndex]) {
          onChange(filteredOptions[highlightedIndex].name);
          setIsOpen(false);
          setSearchTerm('');
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setSearchTerm('');
        break;
    }
  };

  const handleSelect = (optionName: string) => {
    onChange(optionName);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && !compact && (
        <div className="h-[14px] relative shrink-0 w-full mb-[8px]">
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0a0a0a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">
            {label}
          </p>
          {required && (
            <div className="absolute h-[14px] left-[110.2px] top-0 w-[6.516px]">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">*</p>
            </div>
          )}
        </div>
      )}
      
      <div
        className={`bg-white relative rounded-[8px] shrink-0 w-full cursor-pointer ${compact ? 'h-[32px]' : 'h-[36px]'}`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        
        {isOpen ? (
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`absolute h-[20px] left-[8px] overflow-clip ${compact ? 'top-[6px]' : 'top-[8px]'} w-[calc(100%-36px)] bg-transparent border-none outline-none font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px] tracking-[-0.1504px]`}
            placeholder={placeholder}
          />
        ) : (
          <div className={`absolute h-[20px] left-[8px] overflow-clip ${compact ? 'top-[6px]' : 'top-[8px]'} w-[calc(100%-36px)]`}>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px] tracking-[-0.1504px] truncate">
              {selectedOption?.name || placeholder}
            </p>
          </div>
        )}
        
        <div className={`absolute right-[8px] size-[16px] ${compact ? 'top-[8px]' : 'top-[10px]'}`}>
          <ChevronDown className="w-4 h-4 text-[#0a0a0a] opacity-50" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px] shadow-lg max-h-[240px] overflow-auto">
          {filteredOptions.length === 0 ? (
            <div className="px-3 py-2 text-sm text-gray-500">No results found</div>
          ) : (
            filteredOptions.map((option, index) => (
              <div
                key={option.id}
                className={`px-3 py-2 cursor-pointer flex items-center justify-between ${
                  index === highlightedIndex ? 'bg-gray-100' : ''
                } ${value === option.name ? 'bg-blue-50' : ''} hover:bg-gray-100`}
                onClick={() => handleSelect(option.name)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                  {option.name}
                </span>
                {value === option.name && (
                  <Check className="w-4 h-4 text-[#155dfc]" />
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}