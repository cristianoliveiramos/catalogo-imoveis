import './SelectBuilds.css'

export const SelectBuilds = (props) => {
  return(
    <section>
      <div className='select-form'>
        <label htmlFor="">{props.name}</label>        
        <select id="build-type">
          {props.children}
        </select>
      </div>
    </section>
  )
}