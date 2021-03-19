window._itls={
    _locale:new Set(),
    __locale:new Set(['zh','en']),
    get locale(){
        return this._locale;
    },
    set locale(value){
        value.split(' ').forEach(ele=>this._locale.add(ele));
        this.Refresh();
    },
    Switch(val){
        if(this._locale.has(val)){
            if(this._locale.size<=1)
                return;
            this._locale.delete(val);
        }else this._locale.add(val);
        this.Refresh();
    },
    Refresh(){
        this.__locale.forEach(ele=>{
            $(`#itls_btn_${ele}`).removeClass('itls_btn_activated');
            $(`.itls_${ele}`).hide();
        });
        this._locale.forEach((val)=>{
            $(`.itls_${val}`).show();
            $(`#itls_btn_${val}`).addClass('itls_btn_activated');
        });
        let _=[];
        this._locale.forEach(ele=>_.push(ele));
        localStorage.setItem('locale',_.join(' '));
        console.log(`[Current Display Languages] ${_.join('-')}`);
    }
};
(async()=>{
    if(localStorage.getItem('locale')&&localStorage.getItem('locale')!=='null'){
        window._itls.locale=localStorage.getItem('locale');
    }else {
        window._itls.locale='en';
    }

})();