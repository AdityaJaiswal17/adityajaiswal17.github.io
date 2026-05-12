interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start'

  return (
    <div className={`flex flex-col ${alignClass} mb-10`}>
      {eyebrow && (
        <span className="method-badge mb-3">{eyebrow}</span>
      )}
      <div className="section-divider" />
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subheading">{subtitle}</p>}
    </div>
  )
}
