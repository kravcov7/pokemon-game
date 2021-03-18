const MenuItem = ({link,name}) => {
  return (
    <li>
      <a href={link}>{ name }</a>
    </li>
  )
}

export default MenuItem;