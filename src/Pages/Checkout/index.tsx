import { useState } from 'react'
import Button from '../../assets/components/Button'
import Card from '../../assets/components/Card'
import * as S from './styles'

import { useFormik } from 'formik'
import barCode from '../../assets/images/barcode 1.png'
import creditCard from '../../assets/images/credit-card 1.png'

import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'

import { Navigate } from 'react-router-dom'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCcardOwner: '',
      cardDisplayName: '',
      cardNumero: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: ''
    },
    validationSchema: Yup.object({
      //Inicio --- Parte de dados de cobrança e entrega
      fullName: Yup.string()
        .min(5, 'O nome precisa ter no minimo 5 caracteres')
        .required('O Campo é obrigatorio'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O Campo é obrigatorio'),
      cpf: Yup.string()
        .min(14, 'O campor precisa ter 14 caracteres')
        .max(15, 'O campor precisa ter 14 caracteres')
        .required('O Campo é obrigatorio'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('O Campo é obrigatorio'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-maisl são diferentes')
        .required('O campo é obrigatorio'),
      // Fim -------------------------------------------------

      // Inicio --- parte de pagamentos
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCcardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumero: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
      // Fim ---------------------------------------------------------
    }),

    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installmens: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumero,
            owner: {
              document: values.cpfCcardOwner,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2023
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (FieldName: string, message?: string) => {
    const isTouched = FieldName in form.touched
    const isInvalid = FieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const checkInputHasError = (FieldName: string) => {
    const isTouched = FieldName in form.touched
    const isInvalid = FieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  if (items.length === 0) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso!,
              <br />
              Abaixo estão os detalhes da sua compra:
              <br />
              Número do pedido: {data.orderId} <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de crédito' : 'barCode Bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via barCode bancário, lembre-se
              de que a confirmação pode levar até 3 dias úteis. Após a aprovação
              do pagamento, enviaremos um e-mail contendo o código de ativação
              do jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de Cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome completo</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    name="cpf"
                    id="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cpf') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados de entrega - conteúdo digital
              </h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    type="email"
                    name="deliveryEmail"
                    id="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('deliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    type="email"
                    name="confirmDeliveryEmail"
                    id="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('confirmDeliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.TabButton
                onClick={() => setPayWithCard(false)}
                isActive={!payWithCard}
              >
                <img src={barCode} alt="barCode" />
                barCode bancário
              </S.TabButton>
              <S.TabButton
                onClick={() => setPayWithCard(true)}
                isActive={payWithCard}
              >
                <img src={creditCard} alt="Cartão de Crédito" />
                Cartão de crédito
              </S.TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          type="text"
                          name="cardOwner"
                          id="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfCcardOwner">
                          CPF do titular do cartão
                        </label>
                        <input
                          type="text"
                          name="cpfCcardOwner"
                          id="cpfCcardOwner"
                          value={form.values.cpfCcardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cpfCcardOwner') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardDisplayName">Nome no cartão</label>
                        <input
                          type="text"
                          name="cardDisplayName"
                          id="cardDisplayName"
                          value={form.values.cardDisplayName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardDisplayName') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumero">Número do cartão</label>
                        <input
                          type="text"
                          name="cardNumero"
                          id="cardNumero"
                          value={form.values.cardNumero}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardNumero') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresMonth">Mês do expiração</label>
                        <input
                          type="text"
                          name="expiresMonth"
                          id="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresYear">Ano de expiração</label>
                        <input
                          type="text"
                          name="expiresYear"
                          id="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          type="text"
                          name="cardCode"
                          id="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          id="installments"
                          name="installments"
                          value={form.values.installments}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('installments') ? 'error' : ''
                          }
                        >
                          <option>1x de R$ 200,00</option>
                          <option>2x de R$ 200,00</option>
                          <option>3x de R$ 200,00</option>
                        </select>
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    barCode.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            type="button"
            onClick={form.handleSubmit}
            title="Clique aqui para finalizar a compra"
          >
            Finalizar compra
          </Button>
        </form>
      )}
    </div>
  )
}
export default Checkout
