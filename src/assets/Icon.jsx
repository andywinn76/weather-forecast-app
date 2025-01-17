function Icon({name, alt, size}) {
  return (
    <img className={`${size}-icon`} src={`./src/assets/${name}.png`} alt={alt} />
  )
}

export default Icon
