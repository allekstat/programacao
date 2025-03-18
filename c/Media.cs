class Media
{
    static void Main()
    {
        int[] notas = new int[3];
        float media;

        System.Console.WriteLine("Digite a Primeira Nota.");
        System.Console.Write("-> ");
        notas[0] = int.Parse(System.Console.ReadLine());
        System.Console.WriteLine();

        System.Console.WriteLine("Digite a Segunda Nota.");
        System.Console.Write("-> ");
        notas[1] = int.Parse(System.Console.ReadLine());
        System.Console.WriteLine();

        System.Console.WriteLine("\nDigite a Terceira Nota.");
        System.Console.Write("-> ");
        notas[2] = int.Parse(System.Console.ReadLine());
        System.Console.WriteLine();

        media = (float)(notas[0] + notas[1] + notas[2]) / 3;

        System.Console.WriteLine("A Média de Suas Notas é: " + media);

        System.Console.ReadKey(true);
    }
}
