export default function CollapsibleInfo({ activeInfo, parts }) {
  let info = parts[activeInfo];
  //console.log(info);
  return <div dangerouslySetInnerHTML={{ __html: info.body }}></div>;
}
