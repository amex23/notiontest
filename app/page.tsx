

const fetchFromNotion = async () => {
	const res = await fetch('http://localhost:3000/api/notion')
	const data = await res.json()
	return JSON.parse(data)
}

export default async function Home() {

  const rows: rowsStructured = await fetchFromNotion()
  console.log('rows on front endffvvv-------------------', rows)

  return (
    <>sssvvv</>
  )
}
