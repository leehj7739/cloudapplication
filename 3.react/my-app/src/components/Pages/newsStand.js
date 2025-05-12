import React, { useState } from 'react';

// 데이터
const newsData = [
    {
        img: 'https://picsum.photos/200/300?random=1',
        press: 'XX일보',
        title: '대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=2',
        press: 'XX일보',
        title: '연소자의 근로는 특별한 보호를 받는다. 대통령은 조국의 평화적 통일을 위한 성실한 의무를 진다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=3',
        press: 'XX일보',
        title: '국회는 의원의 자격을 심사하며, 의원을 징계할 수 있다. 대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에 붙일 수 있다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=4',
        press: 'XX일보',
        title: '대통령은 국가의 독립·영토의 보전·국가의 계속성과 헌법을 수호할 책무를 진다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=5',
        press: 'XX일보',
        title: '신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=6',
        press: 'XX일보',
        title: '대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=7',
        press: 'XX일보',
        title: '제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=8',
        press: 'XX일보',
        title: '국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 사면·감형 및 복권에 관한 사항은 법률로 정한다.',
        date: '05월 12일 14:29'
    },

    
];
const sportsData = [
    {
        img: 'https://picsum.photos/200/300?random=9',
        press: '스포츠일보',
        title: '헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=10',
        press: '스포츠일보',
        title: '나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=11',
        press: '스포츠일보',
        title: '예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은 차기국회의 승인을 얻어야 한다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=12',
        press: '스포츠일보',
        title: '모든 국민은 양심의 자유를 가진다. 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=13',
        press: '스포츠일보',
        title: '국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=14',
        press: '스포츠일보',
        title: '국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=15',
        press: '스포츠일보',
        title: '국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를 진다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=16',
        press: '스포츠일보',
        title: '헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=1',
        press: '스포츠일보',
        title: '대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=2',
        press: '스포츠일보',
        title: '연소자의 근로는 특별한 보호를 받는다. 대통령은 조국의 평화적 통일을 위한 성실한 의무를 진다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=3',
        press: '스포츠일보',
        title: '국회는 의원의 자격을 심사하며, 의원을 징계할 수 있다. 대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에 붙일 수 있다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=4',
        press: '스포츠일보',
        title: '대통령은 국가의 독립·영토의 보전·국가의 계속성과 헌법을 수호할 책무를 진다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=5',
        press: '스포츠일보',
        title: '신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=6',
        press: '스포츠일보',
        title: '대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=7',
        press: '스포츠일보',
        title: '제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=8',
        press: '스포츠일보',
        title: '국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 사면·감형 및 복권에 관한 사항은 법률로 정한다.',
        date: '05월 12일 14:29'
    },
];

const entertainmentData = [
    {
        img: 'https://picsum.photos/200/300?random=17',
        press: '연예일보',
        title: '모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야 한다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=18',
        press: '연예일보',
        title: '모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다. 의무교육은 무상으로 한다. 혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=19',
        press: '연예일보',
        title: '탄핵결정은 공직으로부터 파면함에 그친다. 그러나, 이에 의하여 민사상이나 형사상의 책임이 면제되지는 아니한다. 국가의 세입·세출의 결산, 국가 및 법률이 정한 단체의 회계검사와 행정기관 및 공무원의 직무에 관한 감찰을 하기 위하여 대통령 소속하에 감사원을 둔다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=20',
        press: '연예일보',
        title: '대법원장의 임기는 6년으로 하며, 중임할 수 없다. 대법원과 각급법원의 조직은 법률로 정한다. 국가의 세입·세출의 결산, 국가 및 법률이 정한 단체의 회계검사와 행정기관 및 공무원의 직무에 관한 감찰을 하기 위하여 대통령 소속하에 감사원을 둔다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=21',
        press: '연예일보',
        title: '국회의원은 법률이 정하는 직을 겸할 수 없다. 모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을 박탈당하지 아니한다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=22',
        press: '연예일보',
        title: '대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=23',
        press: '연예일보',
        title: '명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로 심사할 권한을 가진다. 국교는 인정되지 아니하며, 종교와 정치는 분리된다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=24',
        press: '연예일보',
        title: '각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다. 각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=9',
        press: '연예일보',
        title: '헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=10',
        press: '연예일보',
        title: '나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=11',
        press: '연예일보',
        title: '예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은 차기국회의 승인을 얻어야 한다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=12',
        press: '연예일보',
        title: '모든 국민은 양심의 자유를 가진다. 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=13',
        press: '연예일보',
        title: '국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=14',
        press: '연예일보',
        title: '국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=15',
        press: '연예일보',
        title: '국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를 진다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=16',
        press: '연예일보',
        title: '헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다.',
        date: '05월 12일 14:35'
    },
    {
        img: 'https://picsum.photos/200/300?random=1',
        press: '연예일보',
        title: '대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=2',
        press: '연예일보',
        title: '연소자의 근로는 특별한 보호를 받는다. 대통령은 조국의 평화적 통일을 위한 성실한 의무를 진다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=3',
        press: '연예일보',
        title: '국회는 의원의 자격을 심사하며, 의원을 징계할 수 있다. 대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에 붙일 수 있다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=4',
        press: '연예일보',
        title: '대통령은 국가의 독립·영토의 보전·국가의 계속성과 헌법을 수호할 책무를 진다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=5',
        press: '연예일보',
        title: '신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=6',
        press: '연예일보',
        title: '대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=7',
        press: '연예일보',
        title: '제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.',
        date: '05월 12일 14:29'
    },
    {
        img: 'https://picsum.photos/200/300?random=8',
        press: '연예일보',
        title: '국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 사면·감형 및 복권에 관한 사항은 법률로 정한다.',
        date: '05월 12일 14:29'
    },
];

const categoryDataMap = {
  all: [...newsData, ...sportsData, ...entertainmentData],
  news: newsData,
  sports: sportsData,
  entertainment: entertainmentData
};

function NewsStand() {
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const data = categoryDataMap[category];
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageData = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="newsstand">
      {/* 카테고리 */}
      <ul className="category-list">
        {Object.keys(categoryDataMap).map(cat => (
          <li
            key={cat}
            className={`category-item${category === cat ? ' active' : ''}`}
            onClick={() => { setCategory(cat); setPage(1); }}
          >
            {cat === 'all' ? '전체' : cat === 'news' ? '뉴스' : cat === 'sports' ? '스포츠' : '연예'}
          </li>
        ))}
      </ul>

      {/* 그리드 */}
      <div className="grid-container">
        {pageData.map((item, idx) => (
          <div className="grid-item" key={idx}>
            <div className="news-thumb">
              <img src={item.img} alt={item.press} />
            </div>
            <div className="news-info">
              <span className="news-press">{item.press}</span>
              <p className="news-title">{item.title}</p>
              <span className="news-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="contentPaging">
        <button
          className="paging-btn prev"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          이전
        </button>
        <div className="page-numbers">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`page-number${page === i + 1 ? ' active' : ''}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          className="paging-btn next"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default NewsStand;