const Input = (params) =>
{
    return (
        <span>
            {params.label} <input type={params.type} onChange={params.onChangeFunc} onClick={params.onClickFunc} pattern={params.pattern} value={params.value} required />
        </span>
    )
}

export default Input