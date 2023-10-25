interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({title}: SectionTitleProps) => {
  return (
    <p className="font-bold uppercase pl-4 mb-2 text-center">{title}</p>
  )
}

export default SectionTitle;