using P1_ASP.Models;

namespace P1_ASP.Services
{
    public class RepositoryOfExperiencia
    {
         public List<ClassExperiencia> GetExperiencias()
        {
            return new List<ClassExperiencia>() {
                new ClassExperiencia {
                    Title = "Practicas",
                    Description = "Colegio Fluviá (Nov 2020 -Jun 2021)",
                    Puesto = "Técnico Informático"
                    
                },
                new ClassExperiencia {
                    Title = "Practicas",
                    Description = "Empresa Hispaworks (Diciembre 2022 )",
                    Puesto = "Programador"
                 },

                
            };
        }
    }
}
