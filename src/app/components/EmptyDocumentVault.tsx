import { Upload, Lock, FileText, Brain, TrendingUp } from 'lucide-react';
import emptyVaultImage from "../../assets/84a9c299aeaebc7ec5a46f90e8b3cb22f6e047d7.png";

interface EmptyDocumentVaultProps {
  assetName: string;
  onUpload?: () => void;
}

export default function EmptyDocumentVault({ assetName, onUpload }: EmptyDocumentVaultProps) {
  const handleUpload = () => {
    if (onUpload) {
      onUpload();
    } else {
      console.log('Upload documents for', assetName);
      // TODO: Implement actual upload functionality
    }
  };

  return (
    <div className="h-full flex items-center justify-center bg-white rounded-[8px]">
      <div className="max-w-[600px] text-center px-8">
        {/* Heading */}
        <h1 className="text-[28px] font-bold text-[#1d1e20] mb-3 font-['Inter:Bold',sans-serif]">
          There are no documents for this building
        </h1>

        {/* Subtitle */}
        <p className="text-[16px] text-[#72777e] mb-8 font-['Inter:Regular',sans-serif] leading-[24px]">
          Start by uploading your lease documents for {assetName}. Our team and AI will help organize and extract key data for you.
        </p>

        {/* 3-Step Process */}
        <div className="mb-10 space-y-6">
          {/* Step 1 */}
          <div className="flex items-start gap-4 text-left">
            <div className="w-[48px] h-[48px] rounded-full bg-[#f3f4f6] flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-[#4837b9]" strokeWidth={2} />
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-[16px] font-semibold text-[#1d1e20] mb-1 font-['Inter:SemiBold',sans-serif]">
                Upload your first lease
              </h3>
              <p className="text-[14px] text-[#72777e] font-['Inter:Regular',sans-serif]">
                PDF, Word, or scanned images are all supported
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4 text-left">
            <div className="w-[48px] h-[48px] rounded-full bg-[#f3f4f6] flex items-center justify-center flex-shrink-0">
              <Brain className="w-6 h-6 text-[#4837b9]" strokeWidth={2} />
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-[16px] font-semibold text-[#1d1e20] mb-1 font-['Inter:SemiBold',sans-serif]">
                AI & Human abstraction
              </h3>
              <p className="text-[14px] text-[#72777e] font-['Inter:Regular',sans-serif]">
                We extract dates, rent, and clauses with 98% accuracy
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4 text-left">
            <div className="w-[48px] h-[48px] rounded-full bg-[#f3f4f6] flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-[#4837b9]" strokeWidth={2} />
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-[16px] font-semibold text-[#1d1e20] mb-1 font-['Inter:SemiBold',sans-serif]">
                Explore insights
              </h3>
              <p className="text-[14px] text-[#72777e] font-['Inter:Regular',sans-serif]">
                Visualize your portfolio data in powerful dashboards
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleUpload}
          className="inline-flex items-center gap-2 px-6 h-[44px] bg-[#4837b9] hover:bg-[#3c2d99] text-white rounded-[6px] text-[15px] font-semibold font-['Inter:SemiBold',sans-serif] transition-colors shadow-sm"
        >
          <Upload className="w-5 h-5" strokeWidth={2} />
          Upload document(s)
        </button>

        {/* Security Note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[13px] text-[#72777e] font-['Inter:Regular',sans-serif]">
          <Lock className="w-4 h-4" strokeWidth={2} />
          <span>All documents are encrypted and stored securely</span>
        </div>
      </div>
    </div>
  );
}