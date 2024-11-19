import style from './style.module.scss'

function NotFoundBlock() {
    return (
        <div className={style.notFound}>
            <h2 className={style.title}><span><icon>😕</icon></span> <br/> Страница не найдена</h2>
        </div>
    );
}

export default NotFoundBlock;