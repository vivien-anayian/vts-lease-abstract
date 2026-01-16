import { useState, useEffect } from 'react';
import { Upload, FileText, CheckCircle2 } from 'lucide-react';

interface LoadingProgressModalProps {
  isOpen: boolean;
  onComplete: () => void;
  fileName?: string;
  fileCount?: number;
}

interface Stage {
  label: string;
  icon: typeof Upload;
  duration: number;
  color: string;
}

export default function LoadingProgressModal({
  isOpen,
  onComplete,
  fileName = 'lease document',
  fileCount = 1,
}: LoadingProgressModalProps) {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(9);
  const [extractionProgress, setExtractionProgress] = useState(0);

  const stages: Stage[] = [
    {
      label: 'Uploading document...',
      icon: Upload,
      duration: 3000,
      color: 'text-blue-600',
    },
    {
      label: 'Extracting lease data...',
      icon: FileText,
      duration: 6000,
      color: 'text-purple-600',
    },
    {
      label: 'Finalizing...',
      icon: CheckCircle2,
      duration: 9000,
      color: 'text-green-600',
    },
  ];

  useEffect(() => {
    if (!isOpen) {
      // Reset state when modal closes
      setProgress(0);
      setCurrentStage(0);
      setTimeRemaining(9);
      setExtractionProgress(0);
      return;
    }

    const startTime = Date.now();
    // For multiple files, use shorter duration (3 seconds)
    const totalDuration = fileCount > 1 ? 3000 : 9000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);

      setProgress(newProgress);
      setTimeRemaining(Math.max(0, Math.ceil((totalDuration - elapsed) / 1000)));

      // Update current stage based on elapsed time
      if (fileCount > 1) {
        // For multiple files, simple upload stage
        setCurrentStage(0);
      } else {
        // For single file, detailed stages
        if (elapsed < 3000) {
          setCurrentStage(0);
        } else if (elapsed < 6000) {
          setCurrentStage(1);
        } else {
          setCurrentStage(2);
        }
      }

      // When complete, trigger callback
      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 100); // Update every 100ms for smooth animation

    return () => clearInterval(interval);
  }, [isOpen, onComplete, fileCount]);

  if (!isOpen) return null;

  const CurrentIcon = stages[currentStage].icon;
  const isMultipleFiles = fileCount > 1;

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[8px] shadow-[0px_4px_20px_rgba(0,0,0,0.2)] w-full max-w-[500px] p-8">
        <div className="text-center">
          {/* Current Stage Icon */}
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <CurrentIcon className={`h-8 w-8 ${stages[currentStage].color} animate-pulse`} />
          </div>

          {/* Title */}
          <h3 className="text-[18px] font-semibold font-['Inter:Semi_Bold',sans-serif] text-[#1d1e20] mb-1">
            {isMultipleFiles ? 'Uploading Files' : 'Complete deal'}
          </h3>
          <p className="text-[14px] font-['Inter:Regular',sans-serif] text-[#72777e] mb-6">
            {isMultipleFiles ? `Uploading ${fileCount} files...` : 'Processing your lease document...'}
          </p>

          {/* File Info */}
          <div className="mb-6 p-4 bg-[#f9fafa] rounded-[8px] text-left">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-[#4837b9]" />
              <p className="text-[14px] font-['Inter:Medium',sans-serif] text-[#1d1e20] truncate">
                {fileName}
              </p>
            </div>
            <div className="flex items-center justify-between text-[12px] font-['Inter:Regular',sans-serif] text-[#72777e]">
              <span>{Math.round(progress)}%</span>
              <span>0.23 MB</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#ecedef] rounded-full h-2 mb-2">
            <div
              className="bg-[#4837b9] h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Info */}
          <div className="flex items-center justify-between text-[12px] font-['Inter:Regular',sans-serif] text-[#72777e] mb-8">
            <span>Estimated time remaining: {timeRemaining} seconds</span>
          </div>

          {/* Data Extraction Progress - Only show for single files */}
          {!isMultipleFiles && (
            <div className="mb-6">
              {/* Progress Header */}
              <div className="flex items-center justify-between mb-3">
                <p className="text-[14px] font-['Inter:Semi_Bold',sans-serif] text-[#1d1e20]">
                  Extracting Data
                </p>
                <span className="text-[14px] font-['Inter:Semi_Bold',sans-serif] text-[#4837b9]">
                  {Math.round(extractionProgress)}%
                </span>
              </div>

              {/* Stage List */}
              <div className="space-y-3 text-left">
                {stages.map((stage, index) => {
                  const Icon = stage.icon;
                  const isCompleted = index < currentStage;
                  const isCurrent = index === currentStage;
                  const isPending = index > currentStage;

                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-[8px] transition-all ${
                        isCurrent ? 'bg-blue-50 border border-blue-200' : 'bg-[#f9fafa]'
                      } ${isCompleted && 'opacity-60'}`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      ) : isCurrent ? (
                        <div className="h-5 w-5 border-2 border-[#4837b9] border-t-transparent rounded-full animate-spin flex-shrink-0" />
                      ) : (
                        <div className="h-5 w-5 border-2 border-[#d6d8db] rounded-full flex-shrink-0" />
                      )}
                      <span
                        className={`text-[14px] font-['Inter:Regular',sans-serif] ${
                          isCurrent
                            ? 'font-medium text-[#1d1e20]'
                            : 'text-[#72777e]'
                        }`}
                      >
                        {stage.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <p className="text-[12px] font-['Inter:Regular',sans-serif] text-[#bbbfc4]">
            Please don't close this window while we process your document.
          </p>
        </div>
      </div>
    </div>
  );
}