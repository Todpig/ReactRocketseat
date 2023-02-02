export function Post(props) {
  console.log(props);
  return (
    <div>
      <p>{props.author}</p>
      <br />
      <p>{props.content}</p>
    </div>
  );
}
