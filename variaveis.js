// Var
// variavel de escopo global

{
  console.log(name); // undefined
  {
    console.log(name); // undefined
    {
      console.log(name); // undefined
      {
        var name = "Raquel";
        console.log(name); // Raquel
      }
    }
  }
}

// Let
// variavel de escopo local
{
  //   console.log(lastName); // error
  {
    // console.log(lastName); // error
    {
      //   console.log(lastName); // error
      {
        let lastName = "Ribeiro";
        console.log(lastName); // Ribeiro
      }
    }
  }
}

// Const
// constante de escopo local
{
  //   console.log(fullName); // error
  {
    // console.log(fullName); // error
    {
      //   console.log(fullName); // error
      {
        const fullName = "Raquel Ribeiro";
        console.log(fullName); // Raquel Ribeiro
      }
    }
  }
}
