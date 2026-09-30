import React from 'react';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
  style?: React.CSSProperties;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
  style = {}
}) => (
  <div
    className={`scroll-stack-card w-full min-h-[19rem] md:min-h-[18rem] p-6 sm:p-10 md:p-12 rounded-[28px] md:rounded-[36px] shadow-[0_15px_45px_rgba(0,0,0,0.15)] box-border transition-shadow duration-300 ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      ...style
    }}
  >
    {children}
  </div>
);

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  rotationAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 90,
  itemStackDistance = 22,
}) => {
  const childArray = React.Children.toArray(children).filter(Boolean);
  const total = childArray.length;

  return (
    <div className={`relative w-full ${className}`.trim()}>
      <div className="scroll-stack-inner pt-2 pb-12 w-full">
        {childArray.map((child, index) => {
          const isLast = index === total - 1;
          const stickyTop = `calc(clamp(85px, 14vh, 125px) + ${index * itemStackDistance}px)`;
          const marginBottom = isLast ? '0px' : `${itemDistance}px`;

          const key = (React.isValidElement(child) && child.key) ? String(child.key) : undefined;

          return (
            <div
              key={key}
              className="scroll-stack-card-wrapper w-full"
              style={{
                position: 'sticky',
                top: stickyTop,
                zIndex: 10 + index,
                marginBottom: marginBottom,
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollStack;
