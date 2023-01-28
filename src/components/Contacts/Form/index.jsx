import { useState } from 'react'

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ fullName: "", phoneNumber: ""});

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value});

  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(form.fullName === "" || form.phoneNumber === ""){
      return false;
    } 
      
    addContact([...contacts, form]);

    setForm({ fullName: "", phoneNumber: ""});
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input value={form.fullName} name="fullName" placeholder='Full Name' onChange={onChangeInput}/>
        </div>
        <div>
          <input value={form.phoneNumber} name="phoneNumber" placeholder='Phone Number' onChange={onChangeInput}/>
        </div>
        <div className='btn-div'>
          <button className='btn'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Form;