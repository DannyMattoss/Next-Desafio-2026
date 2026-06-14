
import Image from "next/image";
import Link from "next/link";
import Card from "./card";
import { getIdentities } from "@/src/lib/api/getmvv";
export default async function MVV() {
    try{
        const data = await getIdentities();
        return (
            <ul className="flex flex-row w-full gap-4 px-44 py-16 items-center justify-between">
                
                {data.map((item, index) => (
                    <li className="contents" key={item.id}>
                        <Card 
                            title={item.title} 
                            text={item.text} 
                        />

                        {index < data.length - 1 && (
                            <i className="text-6xl text-mescuro bi bi-music-note"></i>
                        )}
                    </li>
                ))}

            </ul>
        );
           
    } catch(error) {
        console.error("Error fetching indentities", error);
        return <p>Ocorreu um erro ao carregar os dados</p>

    }
    
}