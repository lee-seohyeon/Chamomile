export default function makeTagFilter(data) {
  let result = [];
  data.forEach((d) => {
    d.tag_set.forEach((tag) => {
      if (!result.includes(tag.name)) {
        result.push(tag.name);
      }
    });
  });
  console.log(result);
  return result;
}
