

function CardTestimony() {

    const cantStars = 5;

    const img = "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <article className="shadow-xl hover:shadow-2xl rounded-lg p-4 grid gap-4 h-[225px] transition-all">
        <div className="flex gap-5">
            <img src={img} alt="" className="w-14 h-14 object-top rounded-full object-cover" />
            <div className="grid">
                <h3 className="font-semibold text-lg">Elizabeth Fernandez</h3>
                <span className="text-sm">El exito a la grandeza</span>
            </div>
        </div>
        <p className="text-sm text-justify">Lorem, ipsum dodasdlor sit amet consectetur, dasdaishdabshxbas deserunt, at minima voluptate impedit blanditiis!</p>
        <div className="flex items-center gap-5">
            <span>Calificación:</span>
            <div className="flex gap-2">
                {[...Array(cantStars)].map((_, i) => (
                    <span className="text-[#E7AF28]" key={i}>★</span>
                ))}
            </div>
        </div>
    </article>
  )
}

export default CardTestimony