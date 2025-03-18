class Calculadora
{
    static void Main()
    {
        float numero1, numero2, resultado = 0;
        char operacao;

        System.Console.WriteLine("Digite o Primeiro Número.");
        System.Console.Write("-> ");
        numero1 = float.Parse(System.Console.ReadLine());
        System.Console.WriteLine();

        System.Console.WriteLine("Digite o Segundo Número.");
        System.Console.Write("-> ");
        numero2 = float.Parse(System.Console.ReadLine());
        System.Console.WriteLine();

        System.Console.WriteLine("Digite a Operação, Por Exemplo ( +  -  *  / ).");
        System.Console.Write("-> ");
        operacao = System.Console.ReadKey().KeyChar;
        System.Console.WriteLine();
        System.Console.WriteLine();

        switch (operacao)
        {
            case '+':
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '*':
                resultado = numero1 * numero2;
                break;
            case '/':
                if (numero2 == 0)
                {
                    operacao = 'q';
                    System.Console.WriteLine("Não Pode Dividir Por Zero.");
                }
                resultado = numero1 / numero2;
                break;
            default:
                operacao = 'q';
                System.Console.WriteLine("Operação Inválida.");
                break;
        }

        if (operacao != 'q')
        {
            System.Console.WriteLine("O Resultado é: " + resultado);
        }

        System.Console.ReadKey(true);
    }
}
