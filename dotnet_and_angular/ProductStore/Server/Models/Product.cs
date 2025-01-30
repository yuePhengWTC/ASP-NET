using System.ComponentModel.DataAnnotations;

namespace Server.Models;

public class Product {
    [Key]
    public int Id {get; set;}

    [Required]
    public required string Name {get; set;}

    public string? Descripton {get; set;}

    [Required]
    public decimal price {get; set;}

    public bool IsAvaiable {get; set;}
}