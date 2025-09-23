import { type CardProps } from '@/interfaces'


function Card({title,content}:CardProps) {

    return (
        <div className="border p-4 rounded shadow-black">
            <h2 className="text-xl font-bold text-green-600">{title}</h2>
            <p className="mt-2">{content}</p>
            
        </div>
         
     
    )
}


export default Card;