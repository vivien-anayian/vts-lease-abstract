import { type Lease } from '../data/leaseData';

interface TimelineTabProps {
  lease: Lease;
}

export function TimelineTab({ lease }: TimelineTabProps) {
  return (
    <div className="px-[16px] py-3">
      <div className="max-w-4xl">
        {/* Document Timeline */}
        <div className="bg-white rounded-[6px] border border-[rgba(0,0,0,0.1)] shadow-sm p-4">
          <h2 className="font-['Inter:Medium',sans-serif] text-[16px] text-[#0a0a0a] leading-[24px] tracking-[-0.3125px] mb-4">
            Document Timeline
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[10px] top-[24px] bottom-[24px] w-[2px] bg-[#e5e7eb]" />
            
            <div className="space-y-6 relative">
              {/* Document Upload - Completed */}
              <div className="flex items-start gap-3 relative">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5 z-10">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip0_timeline)">
                      <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 10L9.16667 11.6667L12.5 8.33333" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_timeline">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex-1 pt-0.5">
                  <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0a0a0a] leading-[20px] tracking-[-0.1504px]">
                    Document Uploaded
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#6b7280] leading-[18px] mt-0.5">
                    {lease.fileName}
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#9ca3af] leading-[16px] mt-1">
                    {new Date(lease.uploadDate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })},{' '}
                    {new Date(lease.uploadDate).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                  </p>
                </div>
              </div>

              {/* AI Extraction Started */}
              <div className="flex items-start gap-3 relative">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5 z-10">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip_started_timeline)">
                      <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 10L9.16667 11.6667L12.5 8.33333" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip_started_timeline">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex-1 pt-0.5">
                  <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0a0a0a] leading-[20px] tracking-[-0.1504px]">
                    AI Extraction Started
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#6b7280] leading-[18px] mt-0.5">
                    Processing lease document with VTS AI
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#9ca3af] leading-[16px] mt-1">
                    {new Date(new Date(lease.uploadDate).getTime() + 2000).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })},{' '}
                    {new Date(new Date(lease.uploadDate).getTime() + 2000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                  </p>
                </div>
              </div>

              {/* AI Extraction Complete - Completed */}
              <div className="flex items-start gap-3 relative">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5 z-10">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip_ai_timeline)">
                      <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 10L9.16667 11.6667L12.5 8.33333" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip_ai_timeline">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex-1 pt-0.5">
                  <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0a0a0a] leading-[20px] tracking-[-0.1504px]">
                    AI Extraction Complete
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#6b7280] leading-[18px] mt-0.5">
                    13 fields extracted with 92% average confidence
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#9ca3af] leading-[16px] mt-1">
                    {new Date(new Date(lease.uploadDate).getTime() + 9000).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })},{' '}
                    {new Date(new Date(lease.uploadDate).getTime() + 9000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                  </p>
                </div>
              </div>

              {/* Amendment 1 - Completed */}
              <div className="flex items-start gap-3 relative">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5 z-10">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip_amend1_timeline)">
                      <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 10L9.16667 11.6667L12.5 8.33333" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip_amend1_timeline">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex-1 pt-0.5">
                  <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0a0a0a] leading-[20px] tracking-[-0.1504px]">
                    Amendment #1 Uploaded
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#6b7280] leading-[18px] mt-0.5">
                    Lease_Amendment_1.pdf
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#9ca3af] leading-[16px] mt-1">
                    03/15/2024, 10:22 AM
                  </p>
                </div>
              </div>

              {/* Amendment 2 - Completed */}
              <div className="flex items-start gap-3 relative">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5 z-10">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip_amend2_timeline)">
                      <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 10L9.16667 11.6667L12.5 8.33333" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip_amend2_timeline">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex-1 pt-0.5">
                  <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0a0a0a] leading-[20px] tracking-[-0.1504px]">
                    Amendment #2 Uploaded
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#6b7280] leading-[18px] mt-0.5">
                    Lease_Amendment_2.pdf
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#9ca3af] leading-[16px] mt-1">
                    06/20/2024, 2:45 PM
                  </p>
                </div>
              </div>

              {/* Human Verification - In Progress */}
              {lease.status === 'Pending human review' && (
                <div className="flex items-start gap-3 relative">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5 z-10">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip2_timeline)">
                        <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#FE9A00" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 5V10L13.3333 11.6667" stroke="#FE9A00" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip2_timeline">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0a0a0a] leading-[20px] tracking-[-0.1504px]">
                      Human Verification
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#9ca3af] leading-[16px] mt-1">
                      In progress...
                    </p>
                  </div>
                </div>
              )}

              {/* Verification Complete - Pending or Expert verified */}
              <div className="flex items-start gap-3 relative">
                {lease.status === 'Expert verified' ? (
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5 z-10">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip_complete_timeline)">
                        <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.5 10L9.16667 11.6667L12.5 8.33333" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip_complete_timeline">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-[#d1d5dc] bg-white flex items-center justify-center flex-shrink-0 mt-0.5 z-10" />
                )}
                <div className={`flex-1 pt-0.5 ${lease.status !== 'Expert verified' ? 'opacity-50' : ''}`}>
                  <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0a0a0a] leading-[20px] tracking-[-0.1504px]">
                    Expert Verification Complete
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#9ca3af] leading-[16px] mt-1">
                    {lease.status === 'Expert verified' ? 'Completed on 02/15/2024, 4:30 PM' : 'Pending'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}