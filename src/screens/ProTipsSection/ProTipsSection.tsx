import React, { useState } from "react";

interface Expert {
  name: string;
  title: string;
  avatar: string;
}

interface ProTip {
  title: string;
  content: string;
  expert: Expert;
}

const experts: Expert[] = [
  {
    name: "Morgan Lee",
    title: "Banking Analyst",
    avatar: "/avatar-placeholder.svg"
  },
  {
    name: "Taylor Brooks",
    title: "Personal Finance Editor",
    avatar: "/avatar-placeholder.svg"
  },
  {
    name: "Jordan Patel",
    title: "Savings Specialist",
    avatar: "/avatar-placeholder.svg"
  }
];

const proTips: ProTip[] = [
  {
    title: "Confirm APY requirements",
    content: "Some banks require direct deposit or minimum balances to earn the top rate. Make sure you can meet the requirements.",
    expert: experts[0]
  },
  {
    title: "Compare fees and minimums",
    content: "Low or no monthly fees can matter more than a slightly higher APY. Review minimum balance rules and overdraft policies.",
    expert: experts[1]
  },
  {
    title: "Check ATM access",
    content: "Look for a large fee‑free ATM network or generous reimbursement limits if you withdraw cash often.",
    expert: experts[2]
  }
];

export const ProTipsSection = (): JSX.Element => {
  const [selectedTipIndex, setSelectedTipIndex] = useState(0);
  const currentTip = proTips[selectedTipIndex];

  return (
    <div id="pro-tips" className="w-full">
      <div style={{
          width: '100%',
          padding: '24px',
          background: '#F8F8FA',
          overflow: 'hidden',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '8px',
          display: 'inline-flex',
          borderRadius: '16px'
        }}>
          <div style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '20px',
            display: 'flex'
          }}>
            {/* Title */}
            <div style={{
              alignSelf: 'stretch',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              color: 'black',
              fontSize: '40px',
              fontFamily: 'Work Sans',
              fontWeight: '700',
              lineHeight: '48px',
              wordWrap: 'break-word'
            }}>
              Pro Tips From Our Experts
            </div>

            {/* Content Area */}
            <div style={{
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap'
            }}>
              {/* Experts List */}
              <div style={{
                flex: '1',
                minWidth: '200px',
                maxWidth: '216px',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '16px',
                display: 'inline-flex'
              }}>
                {experts.map((expert, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedTipIndex(index)}
                    style={{
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '12px',
                      display: 'inline-flex',
                      cursor: 'pointer',
                      opacity: selectedTipIndex === index ? 1 : 0.6,
                      transition: 'opacity 0.2s ease'
                    }}
                  >
                    <img
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '24px',
                        objectFit: 'cover'
                      }}
                      src={expert.avatar}
                      alt={expert.name}
                    />
                    <div style={{
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'inline-flex'
                    }}>
                      <div style={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '2px',
                        display: 'inline-flex'
                      }}>
                        <div style={{
                          color: '#333333',
                          fontSize: '14px',
                          fontFamily: 'Work Sans',
                          fontWeight: '600',
                          textDecoration: 'underline',
                          lineHeight: '19.60px',
                          wordWrap: 'break-word'
                        }}>
                          {expert.name}
                        </div>
                      </div>
                      <div style={{
                        color: '#333333',
                        fontSize: '12px',
                        fontFamily: 'Work Sans',
                        fontWeight: '400',
                        lineHeight: '16px',
                        wordWrap: 'break-word'
                      }}>
                        {expert.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tip Content Card */}
              <div style={{
                flex: '2',
                minWidth: 'min(300px, 100%)',
                minHeight: '226px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'white',
                borderRadius: '12px',
                padding: '21px 19px'
              }}>
                <div>
                  <div style={{
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'black',
                    fontSize: '20px',
                    fontFamily: 'Work Sans',
                    fontWeight: '600',
                    lineHeight: '26px',
                    wordWrap: 'break-word',
                    marginBottom: '12px'
                  }}>
                    {currentTip.title}
                  </div>

                  <div style={{
                    color: '#606F7F',
                    fontSize: '16px',
                    fontFamily: 'Work Sans',
                    fontWeight: '400',
                    lineHeight: '24px',
                    wordWrap: 'break-word'
                  }}>
                    {currentTip.content}
                  </div>
                </div>

                {/* Expert Attribution */}
                <div style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '12px',
                  display: 'inline-flex',
                  marginTop: '20px'
                }}>
                  <img
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '24px',
                      objectFit: 'cover'
                    }}
                    src={currentTip.expert.avatar}
                    alt={currentTip.expert.name}
                  />
                  <div style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'inline-flex'
                  }}>
                    <div style={{
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '2px',
                      display: 'inline-flex'
                    }}>
                      <div style={{
                        color: '#333333',
                        fontSize: '14px',
                        fontFamily: 'Work Sans',
                        fontWeight: '600',
                        textDecoration: 'underline',
                        lineHeight: '19.60px',
                        wordWrap: 'break-word'
                      }}>
                        {currentTip.expert.name}
                      </div>
                    </div>
                    <div style={{
                      color: '#333333',
                      fontSize: '12px',
                      fontFamily: 'Work Sans',
                      fontWeight: '400',
                      lineHeight: '16px',
                      wordWrap: 'break-word'
                    }}>
                      {currentTip.expert.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

