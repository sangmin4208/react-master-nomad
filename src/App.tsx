import React, { FormEventHandler, useState } from "react"

const App = () => {
  const [value, setValue] = useState("")
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value } } = event;
    setValue(value)
  }
  const onSubmit: FormEventHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      value: string
    }
    const name = target.value
    console.log(name)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Enter your name"
          value={value}
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
