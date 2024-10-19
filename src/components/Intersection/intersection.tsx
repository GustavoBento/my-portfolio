import { useEffect } from "react"

export const UsarIntersectionObserver = () => {
      useEffect(() => {
        const observer = new IntersectionObserver((itens) => {
          itens.forEach((item) => {
            if (item.isIntersecting) {
              item.target.classList.add("show");
            } else {
              item.target.classList.remove("show");
            }
          });
        });
        
        const secoesInicio = document.querySelectorAll('.hidden'); 
          secoesInicio.forEach((item) => observer.observe(item)); 
          }, []); 
      }