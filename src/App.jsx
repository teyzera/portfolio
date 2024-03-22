import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';
import profile from './assets/profile.png'
import axios from 'axios';

const endpoint = 'https://sheetdb.io/api/v1/xy9jp2v8n33zt'

function App() {
  const [hide, setHide] = useState(false)
  const [data, setData] = useState([])
  
  const callApi = async () => {
    const d = await axios.get(endpoint).then((response) => {
      console.log('response', response)
      const data = response.data
      setData(data)
    })
    console.log('success', d)
  }

  useEffect(() =>{
    callApi()
  },[])

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image={profile}/>

        <Title title="Nattawut Nanta (Toey)">
          <h3>Frontend</h3>
        </Title>

        <Title title="Contact">
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/10/25").format("D MMM YYYY")}</p>
          <p style={{display: hide ? 'none': 'block'}}>
            Tel : +66830220513
          </p>
          <button onClick={() => setHide(!hide)}>{hide ? 'Show': 'Hide'}</button>
          <p>Email : s64122202025@ssru.ac.th</p>
          <p>www.s64122202025@ssru.com</p>
        </Title>

        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quia dignissimos corporis sequi aspernatur unde non ullam voluptas, eveniet dicta ipsum? Error rem dolorem sit facilis molestiae at sequi commodi!</p>
        </Title>

        <Title title="Work Experience">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid debitis nulla tempora velit eligendi necessitatibus eaque, corrupti ipsum sed vitae laboriosam? Quaerat ea qui asperiores veritatis perferendis quasi impedit!</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS /JS</p>
          <p>Canva</p>
          <p>Adobe Premiere Pro</p>
          <p>Adobe Photoshop</p>
          <p>Git</p>
        </Title>

      </div>
    </main>
  )
}

export default App
