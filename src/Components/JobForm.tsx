

const JobForm = () => {
  return (
    <section>
        <form className="container flex flex-col gap-3 bg-whiteBack px-8 py-5 font-mainFont shadow rounded">
            <input className="p-2 border rounded" 
              type="text" placeholder="FullName" required
            />
            <input className="p-2 border rounded"  
              type="email" placeholder="Email" required
            />
            <input className="p-2 border rounded"  
              type="tel" placeholder="Phone Number" 
            />
            <input className="p-2 border rounded"  
              type="url" placeholder="Linkdein Profile URL" 
              />
            <input className="p-2 border rounded"  
              type="url" placeholder="Portfolio Website URL" 
            />
            <input className="p-2 border rounded"  
              type="number" placeholder="Years of Experience" 
            />
            <input className="p-3 border rounded shadow bg-textColor text-whiteBack"  
              type="submit" value="Submit" 
            />
        </form>
    </section>
  )
}

export default JobForm
