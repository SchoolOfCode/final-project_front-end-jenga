export default function CollapsibleInfo({ activeInfo, parts }) {
  let info = parts.filter((part) => part.title === activeInfo);
  //   console.log(info);
  return <div dangerouslySetInnerHTML={{ __html: info[0].body }}></div>;
}
