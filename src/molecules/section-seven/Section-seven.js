    import React, { Component } from 'react';
    import { HashLink as Link } from 'react-router-hash-link';
    import ScrollAnimation from 'react-animate-on-scroll';
    import axios from 'axios';
    import './Section-seven.scss'
    import $ from 'jquery';

    class SectionSeven extends Component {
        constructor(){
            super()
            this.state = {
            showMore: false,
            applicationForm: false,
            copyEmail: false,
            name: '',
            linkedin: '',
            cv: null,
            position: ''
            }
        }

        onFileChange = event => {
        this.setState({ cv: event.target.files[0] });
        };

        handleInput = e => {
        const input = e.target
        this.setState({
            [input.name]: input.value
        })
        }

        handleSubmit = (event) => {
            const target = event.target
            event.preventDefault();
            console.log()
            if (this.state.name.length > 6 && this.state.linkedin.length > 15) {
                const formData = new FormData();

                formData.set('name', this.state.name);
                formData.set('linkedin', this.state.linkedin);
                formData.set('position', this.state.position);
                formData.append('cv', this.state.cv);
                formData.set('apiToken', 'Yzk2OWIyYjE3MWQzNDQwMmE4OWUzYzA4');

                console.log(formData)
                console.log(this.state.cv);

                axios({
                    method: 'post',
                    url: 'https://www.oisami.com/apply.php',
                    data: formData,
                })
                .then(res => {
                console.log(res);
                console.log(res.data);
                })
                alert('Candidatura enviada com sucesso!')
                this.setState({
                    applicationForm: false,
                })
            } else {
                alert('Favor preencher corretamente')
            }
        }

        fileData = () => {
            if (this.state.cv) {
                return (
                    <p className='upload-details'>Arquivo adicionado: {this.state.cv.name}</p>
                );
            } else {
                return (
                    <p className='upload-details no-file'>Nenhum arquivo adicionado - *apenas arquivos em PDF*</p>
                );
            }
        };

        showMore = e => {
            e.stopPropagation()
            e.cancelBubble = true
                const target = e.target
                const roleElement = $(target).parents('.job-role').get(0)
                roleElement.nextSibling.classList.toggle('opened')

                const position = target.innerText
                this.setState({ position: position });
        }

        applyButton = () => {
            this.setState({
                applicationForm: true
            })
        }
        restartCopy = () => {
            setTimeout(() => {
                const emailCopied = document.querySelector('#email-copied')
                const emailToCopy = document.querySelector('#email-to-copy')
                emailCopied.classList.remove('opened')
                emailCopied.classList.add('closed')
                emailToCopy.classList.remove('closed')
                emailToCopy.classList.add('opened')
                this.setState({
                    copyEmail: false
                })
            }, 3000);
        }
        copyingEmail = () => {navigator.clipboard.writeText('recrutamento@oisami.com')}
        copyEmail = () => {
            this.setState({
                copyEmail: true
            })
            this.copyingEmail()
            this.restartCopy()
        }
        render() {
            const { showMore } = this.state
            const { applicationForm } = this.state
            const { copyEmail } = this.state
            return (
                <section id='section-seven'>
                    <div className='title-wrapper'>
                        <p className='title'>vem pra sami</p>
                        <ScrollAnimation animateIn='swing'>
                            <p className='title-bold'>Nossas vagas</p>
                        </ScrollAnimation>
                    </div>
                    <a name='wehire'></a>
                    <div className='jobs-wrapper'>
                        <div className='area'>
                            <p className='title'>Marketing & Vendas</p>
                            <ul className='jobs-list'>
                                <li id='job-1' className='job clickable'>
                                    <div className='job-opening'>
                                        <div className='job-role' onClick={e => { this.showMore(e) }}>
                                            <p className='posted'>
                                                Vaga aberta em <span>7</span> de <span>maio</span> de <span>2020</span></p>
                                            <p className='position'>Branding Manager</p>
                                            <div>
                                                <p className='location'>São Paulo/SP</p>
                                                <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                <p className='routine'>Tempo Integral</p>
                                            </div>
                                        </div>
                                        <div className={`more-info`}>
                                            <div className='job-description'>
                                                <p className='title'>Descrição da vaga</p>
                                                <p className='text'>Responsável por cuidar da imagem e da ressonância de uma marca, adaptando suas estratégias e comunicação para seu público alvo. Nele está a responsabilidade de manter a integridade da marca através de todas as atividades de marketing e de comunicação da empresa</p>
                                            </div>
                                            <div className='job-requirements'>
                                                <p className='title'>Requisitos</p>
                                                <ul className='text'>
                                                    <li>Inglês avançado</li>
                                                    <li>Experiência em startups ou empresas de tecnologia é diferencial</li>
                                                </ul>
                                            </div>
                                            {/* <div className='job-benefits'>
                                                <p className='title'>O que oferecemos?</p>
                                                <ul className='text'>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                </ul>
                                            </div> */}
                                            <button className={` apply-btn btn-before ${(applicationForm === false) ? 'opened' : 'closed'}`} onClick={() =>  this.applyButton()}>Quero me candidatar!</button>
                                            <section id='application-form' className={` ${(applicationForm === true) ? 'opened' : 'closed'}`}>
                                                <form onSubmit={ this.handleSubmit }>
                                                    <p>Preencha os dados abaixo</p>
                                                    <div className='input-wrap'>
                                                        <input className={`${(this.state.name.length > 0 ? 'active' : '')}`} name='name' id='name' onChange={this.handleInput} defaultValue={this.state.name}></input>
                                                        <label htmlFor='name'>Qual é o seu nome completo?</label>
                                                    </div>
                                                    <div className='input-wrap'>
                                                        <input className={`${(this.state.linkedin.length > 0 ? 'active' : '')}`} name='linkedin' id='linkedin' onChange={this.handleInput} defaultValue={this.state.linkedin}></input>
                                                        <label htmlFor='linkedin'>Linkedin</label>
                                                    </div>
                                                    <div className='input-wrap'>
                                                        <input
                                                            readOnly
                                                            type='file'
                                                            id='cv'
                                                            name='cv'
                                                            placeholder='Anexe seu CV (.pdf somente)'
                                                            onChange={this.onFileChange}
                                                        >
                                                        </input>
                                                        <label htmlFor='cv'>Anexe seu CV (.pdf somente)</label>
                                                        <span></span>
                                                    </div>
                                                    {this.fileData()}
                                                    <button type='submit' className={` apply-btn btn-after ${(applicationForm === true) ? 'opened' : 'closed'}`} >Candidatar-se</button>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='area'>
                            <p className='title'>Tecnologia & Produto</p>
                            <ul className='jobs-list'>
                                <li id='job-2' className='job clickable'>
                                    <div className='job-opening'>
                                            <div className='job-role' onClick={e => { this.showMore(e) }}>
                                                <p className='posted'>Vaga aberta em <span>7</span> de <span>maio</span> de <span>2020</span></p>
                                                <p className='position'>Designer SR & UX</p>
                                            <div>
                                                <p className='location'>São Paulo/SP</p>
                                                <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                <p className='routine'>Tempo Integral</p>
                                            </div>
                                            </div>
                                            <div className={`more-info`}>
                                                <div className='job-description'>
                                                    <p className='title'>Descrição da vaga</p>
                                                    <p className='text'>Criar projetos de comunicação visual dos serviços oferecidos pela Instituição, incluindo o desenho de logotipos, formatação de qualquer tipo de material visual como banners, panfletos, layouts para sites da internet, bem como, o tratamento de imagens e textos para redes sociais.</p>
                                                </div>
                                                <div className='job-requirements'>
                                                    <p className='title'>Requisitos</p>
                                                    <ul className='text'>
                                                        <li>Inglês avançado</li>
                                                        <li>Experiência em startups ou empresas de tecnologia é diferencial</li>
                                                    </ul>
                                                </div>
                                                {/* <div className='job-benefits'>
                                                    <p className='title'>O que oferecemos?</p>
                                                    <ul className='text'>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    </ul>
                                                </div> */}
                                                <button className={` apply-btn btn-before ${(applicationForm === false) ? 'opened' : 'closed'}`} onClick={() =>  this.applyButton()}>Quero me candidatar!</button>
                                                <section id='application-form' className={` ${(applicationForm === true) ? 'opened' : 'closed'}`}>
                                                    <form onSubmit={ this.handleSubmit }>
                                                        <p>Preencha os dados abaixo</p>
                                                        <div className='input-wrap'>
                                                            <input className={`${(this.state.name.length > 0 ? 'active' : '')}`} name='name' id='name' onChange={this.handleInput} defaultValue={this.state.name}></input>
                                                            <label htmlFor='name'>Qual é o seu nome completo?</label>
                                                        </div>
                                                        <div className='input-wrap'>
                                                            <input className={`${(this.state.linkedin.length > 0 ? 'active' : '')}`} name='linkedin' id='linkedin' onChange={this.handleInput} defaultValue={this.state.linkedin}></input>
                                                            <label htmlFor='linkedin'>Linkedin</label>
                                                        </div>
                                                        <div className='input-wrap'>
                                                            <input
                                                                readOnly
                                                                type='file'
                                                                id='cv'
                                                                name='cv'
                                                                placeholder='Anexe seu CV (.pdf somente)'
                                                                onChange={this.onFileChange}
                                                            >
                                                            </input>
                                                            <label htmlFor='cv'>Anexe seu CV (.pdf somente)</label>
                                                            <span></span>
                                                        </div>
                                                        {this.fileData()}
                                                        <button type='submit' className={` apply-btn btn-after ${(applicationForm === true) ? 'opened' : 'closed'}`} >Candidatar-se</button>
                                                    </form>
                                                </section>
                                            </div>
                                        </div>
                                </li>
                                <li id='job-3' className='job clickable'>
                                    <div className='job-opening'>
                                        <div className='job-role' onClick={e => { this.showMore(e) }}>
                                            <p className='posted'>Vaga aberta em <span>7</span> de <span>maio</span> de <span>2020</span></p>
                                            <p className='position'>Desenvolvedor Front-End</p>
                                        <div>
                                            <p className='location'>São Paulo/SP</p>
                                            <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                            <p className='routine'>Tempo Integral</p>
                                        </div>
                                        </div>
                                        <div className={`more-info`}>
                                            <div className='job-description'>
                                                <p className='title'>Descrição da vaga</p>
                                                <p className='text'>Prezar pela experiência incrível para os usuários.
                                                    Integração com as APIs.
                                                    Desenvolvimento de transições e efeitos com css.
                                                    interfaces responsivas.
                                                    Comunicação com o time de Design para compilarem as interações.
                                                </p>
                                            </div>
                                            <div className='job-requirements'>
                                                <p className='title'>Requisitos</p>
                                                <ul className='text'>
                                                    <li>HTML</li>
                                                    <li>JavaScript</li>
                                                    <li>CSS/SCSS</li>
                                                    <li>React</li>
                                                    <li>Redux</li>
                                                    <li>Webpack</li>
                                                </ul>
                                            </div>
                                            {/* <div className='job-benefits'>
                                                <p className='title'>O que oferecemos?</p>
                                                <ul className='text'>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                </ul>
                                            </div> */}
                                            <button className={` apply-btn btn-before ${(applicationForm === false) ? 'opened' : 'closed'}`} onClick={() =>  this.applyButton()}>Quero me candidatar!</button>
                                            <section id='application-form' className={` ${(applicationForm === true) ? 'opened' : 'closed'}`}>
                                                <form onSubmit={ this.handleSubmit }>
                                                    <p>Preencha os dados abaixo</p>
                                                    <div className='input-wrap'>
                                                        <input className={`${(this.state.name.length > 0 ? 'active' : '')}`} name='name' id='name' onChange={this.handleInput} defaultValue={this.state.name}></input>
                                                        <label htmlFor='name'>Qual é o seu nome completo?</label>
                                                    </div>
                                                    <div className='input-wrap'>
                                                        <input className={`${(this.state.linkedin.length > 0 ? 'active' : '')}`} name='linkedin' id='linkedin' onChange={this.handleInput} defaultValue={this.state.linkedin}></input>
                                                        <label htmlFor='linkedin'>Linkedin</label>
                                                    </div>
                                                    <div className='input-wrap'>
                                                        <input
                                                            readOnly
                                                            type='file'
                                                            id='cv'
                                                            name='cv'
                                                            placeholder='Anexe seu CV (.pdf somente)'
                                                            onChange={this.onFileChange}
                                                        >
                                                        </input>
                                                        <label htmlFor='cv'>Anexe seu CV (.pdf somente)</label>
                                                        <span></span>
                                                    </div>
                                                    {this.fileData()}
                                                    <button type='submit' className={` apply-btn btn-after ${(applicationForm === true) ? 'opened' : 'closed'}`} >Candidatar-se</button>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                </li>
                                <li id='job-4' className='job clickable'>
                                    <div className='job-opening'>
                                        <div className='job-role' onClick={e => { this.showMore(e) }}>
                                            <p className='posted'>Vaga aberta em <span>7</span> de <span>maio</span> de <span>2020</span></p>
                                            <p className='position'>Desenvolvedor Back-End</p>
                                            <div>
                                                <p className='location'>São Paulo/SP</p>
                                                <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                <p className='routine'>Tempo Integral</p>
                                            </div>
                                        </div>
                                        <div className={`more-info`}>
                                            <div className='job-description'>
                                                <p className='title'>Descrição da vaga</p>
                                                <p className='text'>Montar APIs seguras e rápidas, de fácil manutenção para os novos desenvolvedores.
                                                    Montar o banco de dados.
                                                    Comunicação com o front End.
                                                    Alinhar contrato de API com o front End.
                                                    Autenticação.
                                                </p>
                                            </div>
                                            <div className='job-requirements'>
                                                <p className='title'>Requisitos</p>
                                                <ul className='text'>
                                                    <li>JavaScript</li>
                                                    <li>NodeJS, Restify, .</li>
                                                    <li>Restify</li>
                                                    <li>Desenvolvimento de APIs REST</li>
                                                </ul>
                                            </div>
                                            {/* <div className='job-benefits'>
                                                <p className='title'>O que oferecemos?</p>
                                                <ul className='text'>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                </ul>
                                            </div> */}
                                            <button className={` apply-btn btn-before ${(applicationForm === false) ? 'opened' : 'closed'}`} onClick={() =>  this.applyButton()}>Quero me candidatar!</button>
                                            <section id='application-form' className={` ${(applicationForm === true) ? 'opened' : 'closed'}`}>
                                                <form onSubmit={ this.handleSubmit }>
                                                    <p>Preencha os dados abaixo</p>
                                                    <div className='input-wrap'>
                                                        <input className={`${(this.state.name.length > 0 ? 'active' : '')}`} name='name' id='name' onChange={this.handleInput} defaultValue={this.state.name}></input>
                                                        <label htmlFor='name'>Qual é o seu nome completo?</label>
                                                    </div>
                                                    <div className='input-wrap'>
                                                        <input className={`${(this.state.linkedin.length > 0 ? 'active' : '')}`} name='linkedin' id='linkedin' onChange={this.handleInput} defaultValue={this.state.linkedin}></input>
                                                        <label htmlFor='linkedin'>Linkedin</label>
                                                    </div>
                                                    <div className='input-wrap'>
                                                        <input
                                                            readOnly
                                                            type='file'
                                                            id='cv'
                                                            name='cv'
                                                            placeholder='Anexe seu CV (.pdf somente)'
                                                            onChange={this.onFileChange}
                                                        >
                                                        </input>
                                                        <label htmlFor='cv'>Anexe seu CV (.pdf somente)</label>
                                                        <span></span>
                                                    </div>
                                                    {this.fileData()}
                                                    <button type='submit' className={` apply-btn btn-after ${(applicationForm === true) ? 'opened' : 'closed'}`} >Candidatar-se</button>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='area'>
                            <p className='title'>Pessoas</p>
                            <ul className='jobs-list'>
                                <li id='job-5' className='job clickable'>
                                    <div className='job-opening'>
                                        <div className='job-role' onClick={e => { this.showMore(e) }}>
                                            <p className='posted'>Vaga aberta em <span>7</span> de <span>maio</span> de <span>2020</span></p>
                                            <p className='position'>Analista de Gente e Gestão</p>
                                            <div>
                                                <p className='location'>São Paulo/SP</p>
                                                <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                <p className='routine'>Tempo Integral</p>
                                            </div>
                                            </div>
                                        <div className={`more-info`}>
                                            <div className='job-description'>
                                                <p className='title'>Descrição da vaga</p>
                                                <p className='text'>Garantir a entrega dos processos seletivos da área de recrutamento e seleção – desde alinhamento de perfil, triagem de currículos, agendamento de entrevistas, aplicação e análise de testes, oferta e documentação.
                                                    Gestão do processo seletivo de ponta a ponta.
                                                    Apoiar as áreas de negócios no processo seletivo alinhados aos objetivos estratégicos da companhia.
                                                    Fornecer apoio as áreas de negócio na tomada de decisão no processo seletivo.
                                                    Auxiliar no desenvolvimento de programas e projetos de melhoria para área de recrutamento e seleção.
                                                </p>
                                            </div>
                                            <div className='job-requirements'>
                                                <p className='title'>Requisitos</p>
                                                <ul className='text'>
                                                    <li>Experiência anterior com recrutamento e seleção</li>
                                                    <li>Experiência em startups ou empresas de tecnologia é diferencial</li>
                                                    <li>Inglês avançado</li>
                                                </ul>
                                            </div>
                                            {/* <div className='job-benefits'>
                                                <p className='title'>O que oferecemos?</p>
                                                <ul className='text'>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                </ul>
                                            </div> */}
                                            <button className={` apply-btn btn-before ${(applicationForm === false) ? 'opened' : 'closed'}`} onClick={() =>  this.applyButton()}>Quero me candidatar!</button>
                                            <section id='application-form' className={` ${(applicationForm === true) ? 'opened' : 'closed'}`}>
                                                <form onSubmit={ this.handleSubmit }>
                                                    <p>Preencha os dados abaixo</p>
                                                    <div className='input-wrap'>
                                                        <input className={`${(this.state.name.length > 0 ? 'active' : '')}`} name='name' id='name' onChange={this.handleInput} defaultValue={this.state.name}></input>
                                                        <label htmlFor='name'>Qual é o seu nome completo?</label>
                                                    </div>
                                                    <div className='input-wrap'>
                                                        <input className={`${(this.state.linkedin.length > 0 ? 'active' : '')}`} name='linkedin' id='linkedin' onChange={this.handleInput} defaultValue={this.state.linkedin}></input>
                                                        <label htmlFor='linkedin'>Linkedin</label>
                                                    </div>
                                                    <div className='input-wrap'>
                                                        <input
                                                            readOnly
                                                            type='file'
                                                            id='cv'
                                                            name='cv'
                                                            placeholder='Anexe seu CV (.pdf somente)'
                                                            onChange={this.onFileChange}
                                                        >
                                                        </input>
                                                        <label htmlFor='cv'>Anexe seu CV (.pdf somente)</label>
                                                        <span></span>
                                                    </div>
                                                    {this.fileData()}
                                                    <button type='submit' className={` apply-btn btn-after ${(applicationForm === true) ? 'opened' : 'closed'}`} >Candidatar-se</button>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='area'>
                            <p className='title'>Operações</p>
                            <ul className='jobs-list'>
                                <li id='job-6' className='job clickable'>
                                    <div className='job-opening'>
                                        <div className='job-role' onClick={e => { this.showMore(e) }}>
                                            <p className='posted'>Vaga aberta em <span>7</span> de <span>maio</span> de <span>2020</span></p>
                                            <p className='position'>Gerente Médico</p>
                                            <div>
                                                <p className='location'>São Paulo/SP</p>
                                                <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                <p className='routine'>Tempo Integral</p>
                                            </div>
                                            </div>
                                        <div className={`more-info ${(showMore === true) ? 'opened' : 'closed'}`}>
                                            <div className='job-description'>
                                                <p className='title'>Descrição da vaga</p>
                                                <p className='text'>Definir, aplicar e controlar protocolos clínicos.
                                                    Gestão de equipes técnicas.
                                                    Treinamentos em saúde.
                                                    Modelos de remuneração.
                                                    Relac. médico com rede 2ária, 3ária e 4ária.
                                                </p>
                                            </div>
                                            <div className='job-requirements'>
                                                <p className='title'>Requisitos</p>
                                                <ul className='text'>
                                                    <li>Experiência assistencial de pelo menos 5 anos após a residência médica</li>
                                                    <li>Participação em projetos que envolvam atenção primária</li>
                                                    <li>Conhecimento de gestão de saúde de grandes populações e programas de saúde</li>
                                                    <li>Habilidade em gerenciar equipes de saúde e desenvolver programas de relacionamento médico</li>
                                                    <li>Inglês avançado</li>
                                                </ul>
                                            </div>
                                            {/* <div className='job-benefits'>
                                                <p className='title'>O que oferecemos?</p>
                                                <ul className='text'>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                </ul>
                                            </div> */}
                                            <button className={` apply-btn btn-before ${(applicationForm === false) ? 'opened' : 'closed'}`} onClick={() =>  this.applyButton()}>Quero me candidatar!</button>
                                            <section id='application-form' className={` ${(applicationForm === true) ? 'opened' : 'closed'}`}>
                                                <form onSubmit={ this.handleSubmit }>
                                                    <p>Preencha os dados abaixo</p>
                                                    <div className='input-wrap'>
                                                        <input className={`${(this.state.name.length > 0 ? 'active' : '')}`} name='name' id='name' onChange={this.handleInput} defaultValue={this.state.name}></input>
                                                        <label htmlFor='name'>Qual é o seu nome completo?</label>
                                                    </div>
                                                    <div className='input-wrap'>
                                                        <input className={`${(this.state.linkedin.length > 0 ? 'active' : '')}`} name='linkedin' id='linkedin' onChange={this.handleInput} defaultValue={this.state.linkedin}></input>
                                                        <label htmlFor='linkedin'>Linkedin</label>
                                                    </div>
                                                    <div className='input-wrap'>
                                                        <input
                                                            readOnly
                                                            type='file'
                                                            id='cv'
                                                            name='cv'
                                                            placeholder='Anexe seu CV (.pdf somente)'
                                                            onChange={this.onFileChange}
                                                        >
                                                        </input>
                                                        <label htmlFor='cv'>Anexe seu CV (.pdf somente)</label>
                                                        <span></span>
                                                    </div>
                                                    {this.fileData()}
                                                    <button type='submit' className={` apply-btn btn-after ${(applicationForm === true) ? 'opened' : 'closed'}`} >Candidatar-se</button>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                </li>
                                <li id='job-7' className='job clickable'>
                                    <div className='job-opening'>
                                        <div className='job-role' onClick={e => { this.showMore(e) }}>
                                        <p className='posted'>Vaga aberta em <span>7</span> de <span>maio</span> de <span>2020</span></p>
                                        <p className='position'>Gerente de Operações Médicas</p>
                                        <div>
                                            <p className='location'>São Paulo/SP</p>
                                            <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                            <p className='routine'>Tempo Integral</p>
                                        </div>
                                                                            </div>
                                        <div className={`more-info ${(showMore === true) ? 'opened' : 'closed'}`}>
                                            <div className='job-description'>
                                                <p className='title'>Descrição da vaga</p>
                                                <p className='text'>Implantar serviços de atenção primária.
                                                    Desenhar processos.
                                                    Definir e acompanhar KPIs.
                                                    Suporte logístico à atenção primária.
                                                </p>
                                            </div>
                                            <div className='job-requirements'>
                                                <p className='title'>Requisitos</p>
                                                <ul className='text'>
                                                    <li>Experiência em gestão de projetos de saúde de grande porte</li>
                                                    <li>Conhecimento da legislação da ANS</li>
                                                    <li>Experiência em desenho de processos para instituições e operadoras de saúde</li>
                                                    <li>Habilidade em construir e acompanhar indicadores clínicos, de experiência, operacionais e financeiros de insituições de saúde</li>
                                                    <li>Habilidade de gestão de múltiplas equipes</li>
                                                    <li>Inglês avançado</li>
                                                </ul>
                                            </div>
                                            {/* <div className='job-benefits'>
                                                <p className='title'>O que oferecemos?</p>
                                                <ul className='text'>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                </ul>
                                            </div> */}
                                            <button className={` apply-btn btn-before ${(applicationForm === false) ? 'opened' : 'closed'}`} onClick={() =>  this.applyButton()}>Quero me candidatar!</button>
                                            <section id='application-form' className={` ${(applicationForm === true) ? 'opened' : 'closed'}`}>
                                                <form onSubmit={ this.handleSubmit }>
                                                    <p>Preencha os dados abaixo</p>
                                                    <div className='input-wrap'>
                                                        <input className={`${(this.state.name.length > 0 ? 'active' : '')}`} name='name' id='name' onChange={this.handleInput} defaultValue={this.state.name}></input>
                                                        <label htmlFor='name'>Qual é o seu nome completo?</label>
                                                    </div>
                                                    <div className='input-wrap'>
                                                        <input className={`${(this.state.linkedin.length > 0 ? 'active' : '')}`} name='linkedin' id='linkedin' onChange={this.handleInput} defaultValue={this.state.linkedin}></input>
                                                        <label htmlFor='linkedin'>Linkedin</label>
                                                    </div>
                                                    <div className='input-wrap'>
                                                        <input
                                                            readOnly
                                                            type='file'
                                                            id='cv'
                                                            name='cv'
                                                            placeholder='Anexe seu CV (.pdf somente)'
                                                            onChange={this.onFileChange}
                                                        >
                                                        </input>
                                                        <label htmlFor='cv'>Anexe seu CV (.pdf somente)</label>
                                                        <span></span>
                                                    </div>
                                                    {this.fileData()}
                                                    <button type='submit' className={` apply-btn btn-after ${(applicationForm === true) ? 'opened' : 'closed'}`} >Candidatar-se</button>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ScrollAnimation animateIn="fadeInUp" duration='.5'>
                    <div id='email-section'>
                        <div className='content'>
                            <div className='text-wrapper'>
                                <div>
                                    <p className='title'>Não encontrou o cargo certo?</p>
                                    <p className='text'>Envie o seu currículo por e-mail para ser considerado
                                    <br/>para novas vagas no futuro.</p>
                                </div>
                                <div>
                                    <button id='email-to-copy' className={` copy-email ${(copyEmail === false) ? 'opened' : 'closed'}`} onClick={() =>  this.copyEmail()}>recrutamento@oisami.com</button>
                                    <button id='email-copied' className={` copy-email ${(copyEmail === true) ? 'opened' : 'closed'}`} ><span></span>copiado</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='topback'>
                        <Link to='#root'>
                        <button>voltar ao topo</button>
                        </Link>
                    </div>
                    </ScrollAnimation>
                </section>
            )
        }
    }
    export default SectionSeven