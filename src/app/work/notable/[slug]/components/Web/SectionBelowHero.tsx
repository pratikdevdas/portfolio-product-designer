const SectionBelowHeroWeb = ({
  title,
  contribution,
  about,
}: {
  title: string
  about: string
  contribution: string
}) => {
  return (
    <div className="mx-auto mb-[120px] bg-[#563FEA] text-xl font-normal leading-[30px] text-white">
      <div className="mx-auto max-w-largest py-20">
        <h2 className="pb-4 text-[32px] font-medium leading-[48px]">
          About {title}
        </h2>
        <p className="pb-12">{about}</p>
        <h2 className="pb-4 text-[32px] font-medium leading-[48px]">
          My contribution
        </h2>
        <p>{contribution}</p>
      </div>
    </div>
  )
}
export default SectionBelowHeroWeb
