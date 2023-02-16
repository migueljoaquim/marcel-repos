/**********************************************************************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma 
universidade
 * Data: 10/02/2023
 * Autor: Miguel
 * Versão: 1.0
 *************************************************************************************************************************************/

let resultado = require('./modulos.js/CalculoDeMedias.js')

console.log('sistema que gerencie as médias escolares');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

entradaDados.question('Digite o  nome do aluno(a):\n', function(aluno) {


    let nomeDoAluno = aluno;


    entradaDados.question('Digite o nome do professor(a):\n', function(professor) {


        let nomeDoProfessor = professor;

        entradaDados.question('Digite o sexo do aluno(a):\n', function(sexoAluno) {


            let sexoDoAluno = sexoAluno

            entradaDados.question('Digite o sexo do professor(a):\n', function(sexoProfessor) {

                let sexoDoProfessor = sexoProfessor



                entradaDados.question('Escolha o curso:[DESENVOLVIMENTO DE SISTEMA| REDES DE COMPUTADORES|ELETRICISTA DE MANUTENÇÃO ELETRO ELETRONICA]:\n', function(curso) {

                    let escolhaDoCurso = curso

                    entradaDados.question('Escolha a materia:[SOP | LINGUAGEM DE MARCAÇÃO | PROGRAMAÇÃO ORIENTADA A OBJETOS | REDES]:\n', function(materias) {

                        let escolhaDaMateria = materias

                        if (nomeDoAluno == '' || nomeDoProfessor == '' || sexoDoAluno == '' || sexoDoProfessor == '' || escolhaDoCurso == '' || escolhaDaMateria == '') {
                            console.log('PRENCHER TODOS OS CAMPOS DE DADOS POR FAVOR')
                            entradaDados.close()
                        } else {


                            entradaDados.question('Coloque a nota 1:\n', function(nota1) {

                                let valor1 = nota1


                                entradaDados.question('Coloque a nota 2:\n', function(nota2) {

                                    let valor2 = nota2

                                    entradaDados.question('Coloque a nota 3:\n', function(nota3) {

                                        let valor3 = nota3

                                        entradaDados.question('Coloque a nota 4:\n', function(nota4) {

                                            let valor4 = nota4

                                            if (valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '') {

                                                console.log('PRENCHER TODOS OS CAMPOS DE DADOS POR FAVOR')
                                                entradaDados.close()
                                            }

                                            if (valor1 < 0 || valor1 >= 100) {

                                                console.log('ERRO:vocé é burro colocou o bagulho errado por favor arrumar o valor')
                                                entradaDados.close()

                                            } else if (valor2 < 0 || valor2 >= 100) {

                                                console.log('ERRO:vocé é burro colocou o bagulho errado por favor arrumar o valor')
                                                entradaDados.close()

                                            } else if (valor3 < 0 || valor3 >= 100) {

                                                console.log('ERRO:vocé é burro colocou o bagulho errado por favor arrumar o valor')
                                                entradaDados.close()

                                            } else if (valor4 < 0 || valor4 >= 100) {

                                                console.log('ERRO:vocé é burro colocou o bagulho errado por favor arrumar o valor')
                                                entradaDados.close()
                                            } else {




                                                resultado(valor1, valor2, valor3, valor4);

                                                console.log(resultado)


                                            }

                                        });
                                    });

                                });
                            });

                        }
                    });

                });


            });

        });

    });

});