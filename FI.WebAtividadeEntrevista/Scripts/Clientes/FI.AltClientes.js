
$(document).ready(function () {
    if (obj) {
        $('#formCadastro #Nome').val(obj.Nome);
        $('#formCadastro #CEP').val(obj.CEP);
        $('#formCadastro #Email').val(obj.Email);
        $('#formCadastro #Sobrenome').val(obj.Sobrenome);
        $('#formCadastro #Nacionalidade').val(obj.Nacionalidade);
        $('#formCadastro #Estado').val(obj.Estado);
        $('#formCadastro #Cidade').val(obj.Cidade);
        $('#formCadastro #Logradouro').val(obj.Logradouro);
        $('#formCadastro #Telefone').val(obj.Telefone);
        $('#formCadastro #Cpf').val(obj.CPF);
    }


    if (document.getElementById("gridBeneficiario"))
        $('#gridBeneficiario').jtable({
            title: 'Beneficiario',
            paging: true, //Enable paging
            pageSize: 5, //Set page size (default: 10)
            sorting: true, //Enable sorting
            defaultSorting: 'NOME ASC', //Set default sorting
            actions: {
                listAction: urlListBeneficiario,
            },
            fields: {
                CPF: {
                    title: 'CPF',
                    width: '33%'
                },
                NOME: {
                    title: 'NOME',
                    width: '33%'
                },
                Alterar: {
                    title: '',
                    display: function (data) {
                        return '<button onclick="AlterarBeneficiario(' + data.record.Id + ')" class="btn btn-primary btn-sm">Alterar</button> <button onclick="ExcluirBeneficiario(' + data.record.Id + ')" class="btn btn-primary btn-sm">Excluir</button>';
                    },
                    width: '33%'
                }
            }
        });

    //Load student list from server
    if (document.getElementById("gridBeneficiario"))
        $('#gridBeneficiario').jtable('load');

})


function Cadastro() {

    if ($("#EditeIdBeneficiario").val() == "") {
        $("#EditeIdBeneficiario").val(0);
    }
    if ($("#EditeNomeBeneficiario").val() == "" ) {
        $("#EditeNomeBeneficiario").val("null");       
    }
    if ($("#EditeCpfBeneficiario").val() == "") {
        $("#EditeCpfBeneficiario").val("null");
    }
    if ($("#CpfBeneficiario").val() == "") {
        $("#CpfBeneficiario").val("null");        
    }
    if ($("#NomeBeneficiario").val() == "") {
        $("#NomeBeneficiario").val("null")
    }

    $.ajax({
        url: urlPost,
        method: "POST",
        data: {
            "NOME": $("#Nome").val(),
            "CEP": $("#CEP").val(),
            "Email": $("#Email").val(),
            "Sobrenome": $("#Sobrenome").val(),
            "Nacionalidade": $("#Nacionalidade").val(),
            "Estado": $("#Estado").val(),
            "Cidade": $("#Cidade").val(),
            "Logradouro": $("#Logradouro").val(),
            "Telefone": $("#Telefone").val(),
            "CPF": $("#Cpf").val(),
            "CPFBeneficiario": $("#CpfBeneficiario").val(),
            "NomeBeneficiario": $("#NomeBeneficiario").val(),
            "IdBeneficiario": $("#EditeIdBeneficiario").val()
        },
        error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
        success:
            function (r) {
                ModalDialog("Sucesso!", r)
                $("#formCadastro")[0].reset();
                window.location.href = urlRetorno;
            }
    });
    window.location.href = urlRetorno;
}

function CadastrarBeneficiario() {

    if ($("#EditeIdBeneficiario").val() == "") {
        $("#EditeIdBeneficiario").val(0);
    }
    if ($("#EditeNomeBeneficiario").val() == "") {
        $("#EditeNomeBeneficiario").val("null");
    }
    if ($("#EditeCpfBeneficiario").val() == "") {
        $("#EditeCpfBeneficiario").val("null");
    }

    $.ajax({
        url: urlPost,
        method: "POST",
        data: {
            "NOME": $("#Nome").val(),
            "CEP": $("#CEP").val(),
            "Email": $("#Email").val(),
            "Sobrenome": $("#Sobrenome").val(),
            "Nacionalidade": $("#Nacionalidade").val(),
            "Estado": $("#Estado").val(),
            "Cidade": $("#Cidade").val(),
            "Logradouro": $("#Logradouro").val(),
            "Telefone": $("#Telefone").val(),
            "CPF": $("#Cpf").val(),
            "CPFBeneficiario": $("#CpfBeneficiario").val(),
            "NomeBeneficiario": $("#NomeBeneficiario").val(),
            "IdBeneficiario": $("#EditeIdBeneficiario").val()
        },
        error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
        success:
            function (r) {
                ModalDialog("Sucesso!", r)
                $("#formCadastro")[0].reset();
                window.location.href = urlRetorno;
            }
    });
    window.location.href = urlRetorno;
}



function ExcluirBeneficiario(data) {
    $.ajax({
        url: urlExcluir,
        method: "POST",
        data: {
            "id": data
        },
        error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
        success:
            function (r) {
                    $('#modalCadastroBeneficiario').modal('hide');
                    ModalDialog("Sucesso!", r)
                    $("#formCadastroBeneficiario")[0].reset();
                    window.location.reload()
                
            }
    });
}

function AlterarBeneficiario(data) {
    $('#modalCadastroBeneficiario').modal('hide');
    $('#modalEditeBeneficiario').modal('show');

    $.ajax({
        url: urlAlteracaoBeneficiario,
        method: "POST",
        data: {
            "id": data
        },
        error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
        success:
            function (obj) {
                if (obj) {
                    $('#formEditeBeneficiario #EditeCpfBeneficiario').val(obj.CPF);
                    $('#formEditeBeneficiario #EditeNomeBeneficiario').val(obj.NOME);
                    $('#formEditeBeneficiario #EditeIdBeneficiario').val(obj.Id);
                }
            }
    });

}

function AtualizarBeneficiario(data) {
    var CPFBeneficiario = "";
    var NomeBeneficiario = "";
    var IdBeneficiario = "";

    CPFBeneficiario = $("#EditeCpfBeneficiario").val();
    NomeBeneficiario = $("#EditeNomeBeneficiario").val();
    IdBeneficiario = $("#EditeIdBeneficiario").val();


    $.ajax({
        url: urlAtualizarBeneficiario,
        method: "POST",
        data: {

            "cpf": CPFBeneficiario,
            "nome": NomeBeneficiario,
            "id": IdBeneficiario
        },
        error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
        success:
            function (r) {
                ModalDialog("Sucesso!", r)
                $("#formCadastroBeneficiario")[0].reset();
                $("#formEditeBeneficiario")[0].reset();
                $('#modalCadastroBeneficiario').modal('hide');
                $('#modalEditeBeneficiario').modal('hide');
            }
    });

}









function MascaraCPF(cpf) {
    if (mascaraInteiro(cpf) == false) {
        event.returnValue = false;
    }
    return formataCampo(cpf, '000.000.000-00', event);
}

function mascaraInteiro() {
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false;
        return false;
    }
    return true;
}

function ValidarCPF(cpfString) {

    if (cpfString == "") {
        return true;
    }
    var cpf = cpfString.replace(/[^\d]+/g, '');

    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return alert('CPF Inválido');
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return alert('CPF Inválido');
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return alert('CPF Inválido');
        return true;
    }
    else
        return alert('CPF Inválido');
}

function formataCampo(campo, Mascara, evento) {
    var boleanoMascara;

    var Digitato = evento.keyCode;
    exp = /\-|\.|\/|\(|\)| /g
    campoSoNumeros = campo.value.toString().replace(exp, "");

    var posicaoCampo = 0;
    var NovoValorCampo = "";
    var TamanhoMascara = campoSoNumeros.length;;

    if (Digitato != 8) { // backspace 
        for (i = 0; i <= TamanhoMascara; i++) {
            boleanoMascara = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
                || (Mascara.charAt(i) == "/"))
            boleanoMascara = boleanoMascara || ((Mascara.charAt(i) == "(")
                || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " "))
            if (boleanoMascara) {
                NovoValorCampo += Mascara.charAt(i);
                TamanhoMascara++;
            } else {
                NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                posicaoCampo++;
            }
        }
        campo.value = NovoValorCampo;
        return true;
    } else {
        return true;
    }
}

function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}
