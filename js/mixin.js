var mixin = {
    data:function(){
        return {}
    }
}
// 公共面板评论组件
var Comment = Vue.extend({
  template: `
        <div class="panelBody">
            <div class="panelCommentWrap">
                <div class="commentBox">
                    <div class="leftAvatar">
                        <i class="iconfont icon-morentouxiang"></i>
                    </div>
                    <div class="rightTextare">
                        <textarea placeholder-class="placeholder" placeholder="说点什么吧..." name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="optionalWrap">
                    <button class="btn">取消</button>
                    <button class="btn primary">讨论</button>
                </div>
                <div class="commentList">
                    <div class="commentItemBox">
                        <div class="leftAvatar">
                            <i class="iconfont icon-morentouxiang"></i>
                        </div>
                        <div class="rightComment">
                            <div class="commentName">张某某</div>
                            <div class="commentContent">麻烦尽快审批。</div>
                            <div class="commentTime">2022-05-03 17:42:43</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
});